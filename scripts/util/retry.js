import { logDebug } from "$util/log";

/**
 * A generic retry wrapper for any asynchronous function.
 *
 * @param {Function} fn - The async function to call.
 * @param {unknown[]} fnArgs - An array of arguments to apply.
 * @param {number} retries - Number of retry attempts.
 * @returns {Promise<unknown>}
 */
export const withRetry = async (fn, fnArgs, retries = 3) => {
	try {
		return await fn(...fnArgs);
	} catch (err) {
		if (retries > 0) {
			logDebug(`Retrying... ${retries} attempts left.`);
			return withRetry(fn, fnArgs, retries - 1);
		}
		throw err;
	}
};
