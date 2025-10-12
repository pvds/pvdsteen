<script>
/**
 * @typedef {import('$data/content').ReferenceItem} ReferenceItem
 * @typedef {Object} Props
 * @property {string} [title]
 * @property {ReferenceItem} item
 */

import Expander from "./Expander.svelte";
import Image from "./Image.svelte";

/** @type {Props} */
let { item } = $props();
</script>

<div class="flex flex-row gap-4">
	<Image classes="rounded-full border-4 border-black"
		   widthClass="w-[6rem] max-w-full flex-none"
		   image={item.image}
		   alt={item.author}
		   sizes="6rem"
		   priority={true}/>
	<div class="">
		<strong class="mb-1 text-2xl font-semibold">{item.author}</strong>
		<p class="mb-4 text-lg text-black-light"><span>{item.function}</span>-
			<span>{item.organization}</span></p>
		<blockquote>{@html item.content}</blockquote>
		{#if item.expander}
			<Expander id={item.expander.id} content={item.expander.content}
					  text={item.expander.text} textAlt={item.expander.textAlt} />
		{/if}
	</div>
</div>
