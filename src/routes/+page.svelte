<script>
import Section from "$layout/Section.svelte";
import Expander from "$ui/Expander.svelte";
import Reference from "$ui/Reference.svelte";
import Skills from "$ui/Skills.svelte";
import Timeline from "$ui/Timeline.svelte";

let { data } = $props();
let { about, experience, education, references, knowledge } = data.content;

const twoColGrid = "grid @2xl:grid-cols-2 gap-14 mt-14";
const threeColGrid = "grid @2xl:grid-cols-3 gap-x-12 gap-y-14 mt-14";
</script>

<Section title={about.title} classes="@container bg-black-darkest rounded-xs">
	{@html about.intro.content}

	{#if about.intro.expander }
	<Expander id={about.intro.expander.id} content={about.intro.expander.content}
			  text={about.intro.expander.text} textAlt={about.intro.expander.textAlt}></Expander>
	{/if}

	<div class={twoColGrid}>
		<Section title={about.personal.title} size="sm">
			<dl class="grid grid-cols-[100px_1fr] gap-3">
			{#each about.personal.definitions as definition}
				<dt class="font-semibold">{definition.term}</dt>
				<dd class="text-black-light {definition.class}">{@html definition.def}</dd>
			{/each}
			</dl>
		</Section>
		<Section title={about.languages.title} size="sm">
			<Skills type="dots" skills={about.languages.skills} />
		</Section>
		<Section title={about.soft.title} size="sm">
			<Skills type="line" skills={about.soft.skills} />
		</Section>
		<Section title={about.soft.title} size="sm">
			<Skills type="line" skills={about.interests.skills} />
		</Section>
	</div>
</Section>

<Section title={experience.title} classes="bg-black-darkest rounded-xs">
	<Timeline items={experience.timeline} />
</Section>

<Section title={education.title} classes="bg-black-darkest rounded-xs">
	<Timeline items={education.timeline} />
</Section>

<Section title={references.title} classes="bg-black-darkest rounded-xs">
	<div class="flex flex-col gap-14 mt-14">
		{#each references.reference as reference}
			<Reference item={reference} />
		{/each}
	</div>
</Section>

<Section title={knowledge.title} classes="@container bg-black-darkest rounded-xs">
	<div class={twoColGrid}>
		<Section title={knowledge.programming.title} size="sm">
			<Skills type="line" skills={knowledge.programming.skills} />
		</Section>
		<Section title={knowledge.techniques.title} size="sm">
			<Skills type="line" skills={knowledge.techniques.skills} />
		</Section>
	</div>
	<div class={threeColGrid}>
		<Section title={knowledge.contents.title} size="sm" align="center">
			<Skills type="radial" skills={knowledge.contents.skills} />
		</Section>
		<Section title={knowledge.visualisation.title} size="sm" align="center">
			<Skills type="radial" skills={knowledge.visualisation.skills} />
		</Section>
		<Section title={knowledge.interaction.title} size="sm" align="center">
			<Skills type="radial" skills={knowledge.interaction.skills} />
		</Section>
	</div>
	<div class={twoColGrid}>
		<Section title={knowledge.development.title} size="sm">
			<Skills type="line" skills={knowledge.development.skills} />
		</Section>
		<Section title={knowledge.cmsFrameworks.title} size="sm">
			<Skills type="line" skills={knowledge.cmsFrameworks.skills} />
		</Section>
		<Section title={knowledge.packageManagers.title} size="sm">
			<Skills type="line" skills={knowledge.packageManagers.skills} />
		</Section>
		<Section title={knowledge.packageManagers.title} size="sm">
			<Skills type="line" skills={knowledge.packageManagers.skills} />
		</Section>
	</div>
</Section>
