<script>
import Section from "./Section.svelte";

/**
 * @typedef {import('svelte').Snippet} Snippet
 * @typedef {import('$types/content').SectionSize} SectionSize
 * @typedef {Object} Props
 * @property {Snippet} [header]
 * @property {Snippet} [footer]
 * @property {Snippet} children
 * @property {Snippet} [contentFooter]
 * @property {string} [title]
 * @property {string} [classes=""]
 * @property {SectionSize} [size='md']
 * @property {string} [proseClasses]
 */

/** @type {Props} */
let {
	header,
	footer,
	children,
	contentFooter,
	title,
	classes = "",
	size = "md",
	proseClasses,
} = $props();
</script>

<Section {size} {classes}>
	{@render header?.()}
	<div class="flex gap-16">
		<div class="flex-1 content-center">
			{#if title}
			<h2 class="mb-[1.25em] text-2xl md:text-3xl font-bold">{title}</h2>
			{/if}
			<div class="{proseClasses}">
				{@render children?.()}
			</div>
			{@render contentFooter?.()}
		</div>
	</div>
	{@render footer?.()}
</Section>
