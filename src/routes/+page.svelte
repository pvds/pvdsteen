<script>
import Section from "$layout/Section.svelte";
import Skills from "$ui/Skills.svelte";
import Timeline from "$ui/Timeline.svelte";

let { data } = $props();
let { about, experience, education, references, knowledge } = data.content;
</script>

<Section title={about.title} classes="bg-black-darkest rounded-xs">
	{@html about.intro.content}

	<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-10">
		<Section title={about.personal.title} size="sm">
			<dl class="grid grid-cols-[100px_1fr] gap-2">
			{#each about.personal.definitions as definition}
				<dt class="font-semibold">{definition.term}</dt>
				<dd class="text-black-light">{@html definition.def}</dd>
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

<Section title={references.title} classes="bg-black-darkest rounded-xs"></Section>

<Section title={knowledge.title} classes="bg-black-darkest rounded-xs">
	<div class="grid grid-cols-2 gap-14 mt-14">
		<Section title={knowledge.programming.title} size="sm">
			<Skills type="line" skills={knowledge.programming.skills} />
		</Section>
		<Section title={knowledge.techniques.title} size="sm">
			<Skills type="line" skills={knowledge.techniques.skills} />
		</Section>
	</div>
	<div class="grid grid-cols-3 gap-x-12 gap-y-14 mt-14">
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
	<div class="grid grid-cols-2 gap-14 mt-14">
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
