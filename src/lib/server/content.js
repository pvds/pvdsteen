/**
 * @file This file contains functions to fetch and process content data.
 *
 * @typedef {import('$types/content').PageEntry} PageEntry
 * @typedef {import('$global/seo/Seo.svelte.types').SEOProps} SEOProps
 * @typedef {import('$global/seo/Seo.svelte.types').JsonLdType} JsonLdType
 * @typedef {import('$types/global').global} GlobalProps
 */

import { ORG_DESCRIPTION, SEO_DEFAULT } from "$config";
import { getJsonLd } from "./jsonld.js";

/**
 * Fetch all SEO data.
 * @param {PageEntry} [entry] - The page data to override the default SEO data.
 * @param {JsonLdType} [jsonLdType="WebPage"] - The ld+json type to use.
 * @param {unknown[]} [items=[]] - Optional array of items for collection pages.
 * @returns {SEOProps} - The processed SEO data.
 */
export const getSeo = (entry, jsonLdType = "WebPage", items = []) => {
	if (!entry) return SEO_DEFAULT;
	const jsonld = getJsonLd(entry, jsonLdType, items);
	let category;
	switch (jsonLdType) {
		case "BlogPostPage":
			category = "Blog";
			break;
		case "ServicePage":
			category = "Services";
			break;
	}
	return {
		...SEO_DEFAULT,
		title: entry.fields.title,
		category,
		description: entry.fields.seoDescription,
		index: entry.fields.seoIndex,
		jsonld: jsonld,
	};
};

/**
 * Fetch and process a specific page by its slug.
 * @param {string} _slug - The slug to fetch.
 * @returns {PageEntry} - The processed fields.
 * @throws {Error} - Throws a SvelteKit error if the page is not found.
 */
export const getHome = (_slug) => {
	return {
		meta: {
			id: "home-en", // or any unique string/UUID your system expects
			type: "Entry",
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			locale: "en-US",
		},
		fields: {
			title: "Home",
			slug: "/",
			seoDescription: ORG_DESCRIPTION,
		},
	};
};
