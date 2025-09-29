/**
 * Reduce a ratio to its simplest form
 * @param {number} width
 * @param {number} height
 * @return {string} The reduced ratio in the form "width/height"
 */
export const reduceRatio = (width, height) => {
	let gcd = width,
		remainder = height;
	for (; remainder; ) {
		[gcd, remainder] = [remainder, gcd % remainder];
	}
	return `${width / gcd}/${height / gcd}`;
};
