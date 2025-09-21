<script>
import Section from "./Section.svelte";

/**
 * @typedef {Object} Props
 * @property {string|undefined} title
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { title, children } = $props();
</script>

<div class="hero relative mb-12 -mt-8">
	<Section>
		{#if title}
			<h1 class="text-3xl md:text-4xl mb-6 font-bold">{title}</h1>
		{/if}
		{@render children?.()}
	</Section>
</div>
