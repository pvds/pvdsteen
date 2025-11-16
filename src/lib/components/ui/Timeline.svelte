<script>
/**
 * @typedef {import('$data/content').TimelineItem} TimelineItem
 * @typedef {Object} Props
 * @property {string} [title]
 * @property {TimelineItem[]} items
 */

import Badge from "./Badge.svelte";
import Expander from "./Expander.svelte";

/** @type {Props} */
let { title, items } = $props();
</script>

<ol
	role="list"
	aria-label="{title ?? null}"
	class="relative ml-6 mt-4 before:content-[''] before:absolute before:top-3.5 before:bottom-0 before:left-0 before:w-0.5 before:bg-primary-dark/50 xs-mid:ml-47"
>
	{#each items.filter(item => !item.hidden) as item, i}
		<li
			class="
				relative pl-6 mb-10 last:mb-0
				before:content-[''] before:absolute before:top-3.5 before:-left-0.5
				before:size-1.5 before:rounded-full before:bg-white
			"
			aria-labelledby={`ti-${i}-title ti-${i}-org`}
		>
			<Badge>
				{item.from.month} {item.from.year} — <strong>{item.to.month} {item.to.year}</strong>
			</Badge>

			<h3 id={`ti-${i}-title`} class="mb-1 text-2xl font-semibold">
				{@html item.function}
			</h3>
			<h4 id={`ti-${i}-org`} class="mb-4 text-lg text-black-light">
				{item.organization}
			</h4>

			<div class="prose">
				{@html item.content}
			</div>

			{#if item.expander}
				<Expander hasProse id={item.expander.id} text={item.expander.text} textAlt={item.expander.textAlt}>
					{@html item.expander.content}
				</Expander>
			{/if}
		</li>
	{/each}
</ol>
