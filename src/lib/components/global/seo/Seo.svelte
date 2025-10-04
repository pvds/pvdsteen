<script>
import { asset, resolve } from "$app/paths";
import { page } from "$app/state";
import { ORG_NAME, ORG_NAME_SUFFIX, ORG_SLOGAN, SEO_DEFAULT } from "$config";
import { checkSeo } from "./Seo.helper.js";

/** @typedef {import('./Seo.svelte.types.js').SEOProps} SEOProps */

/** @type {{children?: import('svelte').Snippet}} */
let { children } = $props();

/**
 * @param {string | undefined} title title of the current page
 * @param {string | undefined} [category] category of the current page
 * @param {string} [separator] separator between title, parent, and slogan
 * @returns {string} the constructed title
 */
const constructTitle = (title, category, separator = " - ") => {
	const space = " ";
	const isHome = page.url.pathname === resolve("/");
	const categoryPart = category ? `${category} ${separator} ` : "";
	return isHome || !title
		? ORG_NAME + separator + ORG_NAME_SUFFIX + separator + ORG_SLOGAN
		: title + separator + categoryPart + ORG_NAME + space + ORG_NAME_SUFFIX;
};

const seo = $derived(page.data?.seo ?? SEO_DEFAULT);

let title = $derived(constructTitle(seo.title, seo.category));
let description = $derived(seo.description);
let keywords = $derived(seo.keywords);
let canonical = $derived(seo.canonical || page.url.href);
let siteName = $derived(seo.siteName);
let imageURL = $derived(
	page.data.seo?.imageURL ? asset(`/${seo.imageURL}`) : undefined,
);
let logo = $derived(page.data.seo?.logo ? asset(`/${seo.logo}`) : undefined);
let author = $derived(seo.author);
let type = $derived(seo.type || "website");
let index = $derived(seo.index);
let twitter = $derived(seo.twitter || false);
let openGraph = $derived(seo.openGraph || false);
let jsonld = $derived(seo.jsonld);

let ldScript = $derived(
	`<script type="application/ld+json">${JSON.stringify(jsonld)}${"<"}/script>`,
);

if (import.meta.env.MODE === "development") {
	$effect(() => checkSeo(seo, page.route.id));
}
</script>

<svelte:head>
	{#if imageURL}
		<meta name="robots" content={index ? "index, follow, max-image-preview:large" :
			"noindex nofollow"}>
	{:else}
		<meta name="robots" content={index ? "index, follow" : "noindex nofollow"}>
	{/if}
	{#if title}
		<title>{title}</title>
		<link rel="canonical" href={canonical || page.url.href}>
	{/if}
	{#if description}
		<meta name="description" content={description}>
	{/if}
	{#if keywords}
		<meta name="keywords" content={keywords}>
	{/if}
	{#if author}
		<meta name="author" content={author}>
	{/if}
	{#if openGraph}
		{#if siteName}
			<meta property="og:site_name" content={siteName}>
		{/if}
		{#if title}
			<meta property="og:url" content={page.url.href}>
			<meta property="og:type" content={type}>
			<meta property="og:title" content={title}>
		{/if}
		{#if description}
			<meta property="og:description" content={description}>
		{/if}
		{#if imageURL}
			<meta property="og:image" content={imageURL}>
		{/if}
		{#if logo}
			<meta property="og:logo" content={logo}>
		{/if}
	{/if}
	{#if twitter}
		{#if title}
			<meta name="twitter:card" content="summary_large_image">
			<meta property="twitter:domain" content={page.url.hostname}>
			<meta property="twitter:url" content={page.url.href}>
			<meta name="twitter:title" content={title}>
		{/if}
		{#if description}
			<meta name="twitter:description" content={description}>
		{/if}
		{#if imageURL}
			<meta name="twitter:image" content={imageURL}>
		{/if}
	{/if}
	{@render children?.()}
	{#if jsonld}
		{@html ldScript}
	{/if}
</svelte:head>
