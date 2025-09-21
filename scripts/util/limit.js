/**
 * @typedef {<T>(fn: (...args: unknown[]) => T, ...args: unknown[]) => Promise<T>} LimitCall
 *
 * @typedef {LimitCall & {
 *   readonly activeCount: number;
 *   readonly pendingCount: number;
 *   clearQueue(): void;
 * }} Limit
 */

/**
 * Run multiple promise-returning & async functions with limited concurrency
 *
 * Light-weight alternative to [p-limit](https://github.com/sindresorhus/p-limit)
 * - No dependencies.
 * - FIFO queue, no priority.
 * - Zalgo safe - always async.
 * - Scaling: for 10k+ use a deque/ring buffer (e.g., yocto-queue) to avoid O(n) shifts.
 *
 * @param {number} concurrency - Integer >= 1
 * @returns {Limit}
 *
 * @example
 * import { pLimit } from "$util/limit.js";
 *
 * async function main(files) {
 *   const limit = pLimit(4);
 *   const tasks = files.map((file) =>
 *     limit(async () => {
 *       return await processFile(file);
 *     })
 *   );
 *
 *   const results = await Promise.all(tasks);
 *   return results;
 * }
 */
export function pLimit(concurrency) {
	if (!Number.isInteger(concurrency) || concurrency < 1) {
		throw new TypeError("Expected `concurrency` to be an integer >= 1");
	}

	/** @type {Array<() => void>} */
	const queue = [];
	let activeCount = 0;

	function drain() {
		while (activeCount < concurrency && queue.length) {
			const run = queue.shift();
			if (run) run();
		}
	}

	const limit = /** @type {Limit} */ (
		(fn, ...args) =>
			new Promise((outerResolve) => {
				const start = () => {
					activeCount++;
					const result = Promise.resolve().then(() => fn(...args));

					// Expose the task's own promise immediately
					outerResolve(result);
					// Safely update counters regardless of outcome; avoid unhandled rejections
					result
						.finally(() => {
							activeCount--;
							queueMicrotask(drain);
						})
						.catch(() => {});
				};

				if (activeCount < concurrency) {
					queueMicrotask(start); // consistent async start
				} else {
					queue.push(start);
				}
			})
	);

	Object.defineProperties(limit, {
		activeCount: { get: () => activeCount },
		pendingCount: { get: () => queue.length },
	});

	/** @type {() => void} */
	limit.clearQueue = () => {
		queue.length = 0;
	};

	return limit;
}
