<script>
import Section from "$layout/Section.svelte";

let { data } = $props();
let { header, intro } = data.page.fields;
let { about, experience, education, references, knowledge } = data.content;
</script>

<Section title={about.title} classes="bg-black-darkest rounded-xs">
	{@html about.intro.content}
</Section>

<Section title={experience.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={education.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={references.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={knowledge.title} classes="bg-black-darkest rounded-xs">

</Section>
