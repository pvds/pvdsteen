<script>
/**
 * @typedef {Object} Props
 * @property {string} [classes] on outer <section>, use styling the section (position, z-index, etc.)
 * @property {string} [innerClasses] on inner <div>, use for styling the content (grid, flex, etc.)
 * @property {string} [title]
 * @property {'sm'|'md'|'lg'} [size='md']
 * @property {string} [customSpacing]
 * @property {import('svelte').Snippet} [children]
 */

import { SPACING_X_CLASSES } from "$config";

/** @type {Props} */
let {
	classes,
	innerClasses,
	title,
	size = "md",
	customSpacing,
	children,
} = $props();

const spacingY = {
	sm: {
		default: "md-mid:py-6",
		title: "mb-4 md-mid:mb-6",
	},
	md: {
		default: "py-2 md-mid:py-10",
		title: "mb-6 md-mid:mb-8",
	},
	lg: {
		default: "py-6 md-mid:py-14",
		title: "mb-8 md-mid:mb-10",
	},
};

let spacing = $derived(
	customSpacing || `${spacingY[size].default} ${SPACING_X_CLASSES}`,
);
let titleSpacing = $derived(spacingY[size].title);
</script>

<section class="relative {classes} {spacing}">
	<div class="max-w-6xl mx-auto {innerClasses}">
		{@render content()}
	</div>
</section>

{#snippet content()}
	{#if title}
		<h2 class="{titleSpacing} text-primary-darkest text-2xl md:text-3xl font-bold">{title}</h2>
	{/if}
	{@render children?.()}
{/snippet}
