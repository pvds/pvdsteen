<script>
import { asset, resolve } from "$app/paths";
import { page } from "$app/state";
import { ORG_NAME, ORG_NAME_SUFFIX, SEO_DEFAULT } from "$config";
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
		? ORG_NAME + separator + ORG_NAME_SUFFIX
		: title + separator + categoryPart + ORG_NAME + space + ORG_NAME_SUFFIX;
};

const seo = $derived(page.data?.seo ?? SEO_DEFAULT);
const title = $derived(constructTitle(seo.title, seo.category));
const canonical = $derived(seo.canonical || page.url.href);
const imageURL = $derived(seo.imageURL ? asset(`/${seo.imageURL}`) : undefined);
const logo = $derived(seo.logo ? asset(`/${seo.logo}`) : undefined);
const ldScript = $derived(
	`<script type="application/ld+json">${JSON.stringify(seo.jsonld)}${"<"}/script>`,
);

if (import.meta.env.MODE === "development") {
	$effect(() => checkSeo(seo, page.route.id));
}
</script>

<svelte:head>
	{#if imageURL}
		<meta name="robots" content={seo.index ? "index, follow, max-image-preview:large" :
			"noindex nofollow"}>
	{:else}
		<meta name="robots" content={seo.index ? "index, follow" : "noindex nofollow"}>
	{/if}
	{#if title}
		<title>{title}</title>
		<link rel="canonical" href={canonical || page.url.href}>
	{/if}
	{#if seo.description}
		<meta name="description" content={seo.description}>
	{/if}
	{#if seo.author}
		<meta name="author" content={seo.author}>
	{/if}
	{#if seo.openGraph}
		{#if seo.siteName}
			<meta property="og:site_name" content={seo.siteName}>
		{/if}
		{#if title}
			<meta property="og:url" content={page.url.href}>
			<meta property="og:type" content={seo.type || "website"}>
			<meta property="og:title" content={title}>
		{/if}
		{#if seo.description}
			<meta property="og:description" content={seo.description}>
		{/if}
		{#if imageURL}
			<meta property="og:image" content={imageURL}>
		{/if}
		{#if logo}
			<meta property="og:logo" content={logo}>
		{/if}
	{/if}
	{#if seo.twitter}
		{#if title}
			<meta name="twitter:card" content="summary_large_image">
			<meta property="twitter:domain" content={page.url.hostname}>
			<meta property="twitter:url" content={page.url.href}>
			<meta name="twitter:title" content={title}>
		{/if}
		{#if seo.description}
			<meta name="twitter:description" content={seo.description}>
		{/if}
		{#if imageURL}
			<meta name="twitter:image" content={imageURL}>
		{/if}
	{/if}
	{@render children?.()}
	{#if seo.jsonld}
		{@html ldScript}
	{/if}
</svelte:head>
