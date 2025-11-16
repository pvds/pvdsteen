/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - The text to slugify
 * @return {string} - The slugified text
 * @example
 * slugify("Honesty-Humility") // "honesty-humility"
 * slugify("Social Self-esteem") // "social-self-esteem"
 */
export const slugify = (text) => {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};
