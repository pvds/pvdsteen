/**
 * @file JSON-LD helpers.
 *
 * @typedef {import('$types/content').ImageField} ImageField
 * @typedef {import('schema-dts').ImageObject} ImageObject
 * @typedef {import('schema-dts').Organization} Organization
 * @typedef {import('schema-dts').AggregateRating} AggregateRating
 * @typedef {ImageObject & { "@context": string }} ExtendedImageObject
 */

import { ORG_LOGO_URL, URL_BASE_PRODUCTION } from "$config";

/**
 * Helper function to get the parent URL by removing its last segment.
 * For example, given "https://example.com/blog/post", it returns "https://example.com/blog".
 * @param {string} url - The full URL.
 * @returns {string} - The parent URL.
 */
export function getParentUrl(url) {
	return url.split("/").slice(0, -1).join("/");
}

/**
 * Get the Organization logo.
 * @return {ImageObject}
 */
export function getOrgLogo() {
	return {
		"@type": "ImageObject",
		url: `${URL_BASE_PRODUCTION}/${ORG_LOGO_URL}`,
		width: {
			"@type": "QuantitativeValue",
			value: 48,
			unitText: "pixels",
		},
		height: {
			"@type": "QuantitativeValue",
			value: 48,
			unitText: "pixels",
		},
	};
}
