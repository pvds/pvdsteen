<script>
import ContentSection from "$layout/ContentSection.svelte";
import Hero from "$layout/Hero.svelte";

let { data } = $props();
let { header, sections } = data.page.fields;
</script>

<Hero title={header}></Hero>

{#if sections?.length}
	{#each sections as section, i}
		<ContentSection size="lg" title={section?.header || section?.title}>
			{@html section.content}
		</ContentSection>
	{/each}
{/if}
