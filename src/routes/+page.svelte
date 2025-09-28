<script>
import ContentSection from "$layout/ContentSection.svelte";
import Hero from "$layout/Hero.svelte";

let { data } = $props();
let { header, intro, sections } = data.page.fields;
let content = data.content;

console.log("Page content:", content);
</script>

<Hero title={header}>
	{@html intro}
</Hero>

{#if sections?.length}
	{#each sections as section, i}
	<ContentSection size="lg" title={section.header || section.title}>
		{@html section.content}
	</ContentSection>
	{/each}
{/if}
