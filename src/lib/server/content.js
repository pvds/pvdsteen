/**
 * @file This file contains functions to fetch and process content data.
 *
 * @typedef {import('$types/contentful').BaseFieldsRaw} BaseFieldsRaw
 * @typedef {import('$types/contentful').BaseFields} BaseFields
 * @typedef {import('$types/contentful').BaseEntry} BaseEntry
 * @typedef {import('$types/contentful').BaseEntryRaw} BaseEntryRaw
 * @typedef {import('$types/contentful').BaseFieldsMinimal} BaseFieldsMinimal
 * @typedef {import('$types/contentful').Metadata} Metadata
 * @typedef {import('$types/contentful').PostEntry} PostEntry
 * @typedef {import('$types/contentful').PageEntry} PageEntry
 * @typedef {import('$types/contentful').NavigationEntry} NavigationEntry
 * @typedef {import('$types/contentful').ReviewEntry} ReviewEntry
 * @typedef {import('$types/contentful').ServiceEntry} ServiceEntry
 * @typedef {import('$lib/types/contentful').SectionFields} SectionFields
 * @typedef {import('$global/seo/Seo.svelte.types').SEOProps} SEOProps
 * @typedef {import('$global/seo/Seo.svelte.types').JsonLdType} JsonLdType
 * @typedef {import('$types/global').global} GlobalProps
 */

import { error } from "@sveltejs/kit";
import { SEO_DEFAULT } from "$config";
import navigationItems from "$data/generated/navigation.json";
import pageItems from "$data/generated/pages.json";
import postItems from "$data/generated/posts.json";
import reviewItems from "$data/generated/reviews.json";
import serviceItems from "$data/generated/services.json";
import { getJsonLd } from "./jsonld.js";
import { markdownToHtml, splitText } from "./utils.js";

/**
 * Preprocess JSON data to ensure the 'contentSections' field exists.
 * @param {BaseEntryRaw[]} data - Array of content entries.
 * @returns {BaseEntry[]} Processed data.
 */
const preprocessJson = (data) => {
	return data?.map((item) => ({
		...item,
		fields: {
			...item.fields,
			contentSections: [],
		},
		prev: undefined,
		next: undefined,
	}));
};

/**
 * Fetch all SEO data.
 * @param {PageEntry|PostEntry|ServiceEntry} [entry] - The page data to override the default SEO data.
 * @param {JsonLdType} [jsonLdType="WebPage"] - The ld+json type to use.
 * @param {PostEntry[]|ServiceEntry[]} [items=[]] - Optional array of items for collection pages.
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
		keywords: entry.fields.seoKeywords,
		index: entry.fields.seoIndex,
		jsonld: jsonld,
	};
};

/**
 * Processes a single content entry by converting its markdown fields.
 *
 * @param {BaseEntry} entry A content entry parsed from Contentful.
 * @returns {BaseEntry} The entry with markdown converted.
 */
function processEntryMarkdown(entry) {
	const sections = entry.fields.sections?.map((section) => ({
		...section,
		content: markdownToHtml(section.content),
	}));

	return {
		...entry,
		fields: {
			...entry.fields,
			intro: markdownToHtml(entry.fields.intro),
			contentSections: splitText(markdownToHtml(entry.fields.content)),
			sections,
			outro: markdownToHtml(entry.fields.outro),
		},
	};
}
