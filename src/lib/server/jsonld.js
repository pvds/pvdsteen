// biome-ignore-all lint: first refactor this file

/**
 * @file This file contains the JSON-LD generator functions.
 *
 * @typedef {import('$types/content').PageEntry} PageEntry
 * @typedef {import('$global/seo/Seo.svelte.types').JsonLdType} JsonLdType
 *
 * // Schema-dts types:
 * @typedef {import('schema-dts').BlogPosting} BlogPosting
 * @typedef {import('schema-dts').WebPage} WebPage
 * @typedef {import('schema-dts').WebSite} WebSite
 * @typedef {import('schema-dts').Organization} Organization
 * @typedef {import('schema-dts').Service} Service
 * @typedef {import('schema-dts').CollectionPage} CollectionPage
 *
 * // Allowed values for page type.
 * @typedef {"WebPage" | "ContactPage" | "AboutPage" | "CollectionPage"} AllowedPageTypes
 *
 * // Homepage
 * @typedef {{ "@context": string, "@graph": (WebSite | Organization)[] }} HomePage
 *
 * // Extended types (we add a "@context" property)
 * @typedef {BlogPosting & { "@context": string }} ExtendedBlogPosting
 * @typedef {WebPage & { "@context": string }} ExtendedWebPage
 * @typedef {Organization & { "@context": string }} ExtendedOrganization
 * @typedef {Service & { "@context": string }} ExtendedService
 * @typedef {CollectionPage & { "@context": string }} ExtendedCollectionPage
 */

import {
	CONTACT_CITY,
	CONTACT_COUNTRY,
	CONTACT_EMAIL,
	CONTACT_PHONE,
	CONTACT_POSTAL,
	CONTACT_STREET,
	ORG_NAME,
	ORG_SAMEAS,
	ORG_VAT_ID,
	OWNER_IMAGE,
	OWNER_NAME,
	OWNER_PROFESSION,
	OWNER_SAMEAS,
	SITE_PREVIEW_URL,
	URL_BASE_PRODUCTION,
} from "$config";
import { getOrgLogo, getParentUrl } from "./jsonld.helpers.js";

/**
 * Generate JSON-LD based on the page type.
 * @param {PageEntry} entry - The entry data.
 * @param {JsonLdType} jsonLdType - The type of JSON-LD.
 * @param {unknown[]} [items=[]] - Optional array of items for collection pages.
 * @returns { ExtendedWebPage | HomePage | undefined}
 */
export const getJsonLd = (entry, jsonLdType = "WebPage", items = []) => {
	let jsonld;
	switch (jsonLdType) {
		case "WebPage":
			jsonld = getPage(entry);
			break;
		case "HomePage":
			jsonld = getHomePage(entry);
			break;
	}
	if (jsonld && !("@graph" in jsonld)) {
		// Extra global properties for all types except ones using @graph; these need to be
		// assigned in the appropriate type.
	}

	return jsonld;
};

/**
 * Generate JSON-LD for a generic WebPage.
 * @param {PageEntry} page - The page entry.
 * @returns {ExtendedWebPage}
 */
function getPage(page) {
	return getBasePage(page, "WebPage");
}

/**
 * Generate JSON-LD for the Homepage using @graph.
 * This returns a JSON-LD object with separate nodes for the WebSite and Organization.
 *
 * @param {PageEntry} page - The homepage entry data.
 * @returns {HomePage}
 */

function getHomePage(page) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${URL_BASE_PRODUCTION}/#website`,
				url: URL_BASE_PRODUCTION,
				name: ORG_NAME,
				image: `${URL_BASE_PRODUCTION}/${SITE_PREVIEW_URL}`,
				publisher: {
					"@id": `${URL_BASE_PRODUCTION}/#organization`,
				},
			},
			{
				"@type": "Organization",
				"@id": `${URL_BASE_PRODUCTION}/#organization`,
				name: ORG_NAME,
				url: URL_BASE_PRODUCTION,
				logo: getOrgLogo(),
				sameAs: ORG_SAMEAS,
				founder: [
					{
						"@type": "Person",
						name: OWNER_NAME,
						jobTitle: OWNER_PROFESSION,
						worksFor: {
							"@type": "Organization",
							name: ORG_NAME,
							url: URL_BASE_PRODUCTION,
						},
						sameAs: OWNER_SAMEAS,
						image: `${URL_BASE_PRODUCTION}/${OWNER_IMAGE}`,
						alumniOf: [
							{
								"@type": "EducationalOrganization",
								name: "Amsterdam University of Applied Sciences",
							},
						],
						knowsAbout: [
							"Frontend Development",
							"Software Development",
							"Web Development",
							"Web Performance",
							"User Experience",
							"Design Systems",
							"Complex Systems",
							"Accessibility",
							"Mentoring",
							"Agile",
						],
					},
				],
				telephone: CONTACT_PHONE,
				email: CONTACT_EMAIL,
				address: {
					"@type": "PostalAddress",
					streetAddress: CONTACT_STREET,
					addressLocality: CONTACT_CITY,
					postalCode: CONTACT_POSTAL,
					addressCountry: CONTACT_COUNTRY,
				},
				vatID: ORG_VAT_ID,
			},
		],
	};
}

/**
 * Generate the base JSON‑LD for a page.
 * Returns a WebPage with a breadcrumb list.
 *
 * @param {PageEntry} page - The page entry.
 * @param {AllowedPageTypes} pageType - The specific page type.
 * @param {{name: string, item: string}} [extraCrumb] - Optional extra breadcrumb item.
 * @returns {ExtendedWebPage | ExtendedCollectionPage}
 */
function getBasePage(page, pageType, extraCrumb) {
	const defaultUrl = `${URL_BASE_PRODUCTION}/${page.fields.slug}`;
	const canonicalUrl = extraCrumb ? extraCrumb.item : defaultUrl;
	/** @type {ExtendedWebPage | ExtendedCollectionPage} */
	const base = {
		"@context": "https://schema.org",
		"@type": pageType,
		name: page.fields.title,
		description: page.fields.seoDescription,
		url: canonicalUrl,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": canonicalUrl,
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: `${URL_BASE_PRODUCTION}/`,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: page.fields.title,
					item: extraCrumb
						? getParentUrl(extraCrumb.item)
						: defaultUrl,
				},
			],
		},
	};
	// @ts-expect-error
	const breadCrumbList = base.breadcrumb?.itemListElement;
	if (extraCrumb && breadCrumbList?.length) {
		breadCrumbList.push({
			"@type": "ListItem",
			position: breadCrumbList.length + 1,
			name: extraCrumb.name,
			item: extraCrumb.item,
		});
	}
	return base;
}
