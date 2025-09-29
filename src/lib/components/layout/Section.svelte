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

/** @type {Props} */
let {
	classes,
	innerClasses,
	title,
	size = "md",
	customSpacing,
	children,
} = $props();

const spacingDefault = {
	sm: {
		block: "p-4 md-mid:p-6",
		title: "mb-4 md-mid:mb-6",
	},
	md: {
		block: "p-6 md-mid:p-10",
		title: "mb-6 md-mid:mb-8",
	},
	lg: {
		block: "p-10 md-mid:p-16",
		title: "mb-8 md-mid:mb-10",
	},
};

let spacing = $derived(customSpacing || spacingDefault[size].block);
let titleSpacing = $derived(spacingDefault[size].title);
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
