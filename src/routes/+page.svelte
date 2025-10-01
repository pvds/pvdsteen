<script>
import Section from "$layout/Section.svelte";

let { data } = $props();
let { about, experience, education, references, knowledge } = data.content;
</script>

<Section title={about.title} classes="bg-black-darkest rounded-xs">
	{@html about.intro.content}

	<div class="grid grid-cols-2 gap-6 mt-10">
		<Section title={about.personal.title} size="sm">
			<dl class="grid grid-cols-[100px_1fr] gap-2">
			{#each about.personal.definitions as definition}
				<dt class="font-bold">{definition.term}</dt>
				<dd class="text-black-light">{@html definition.def}</dd>
			{/each}
			</dl>
		</Section>
		<Section title={about.languages.title} size="sm">
			<ul class="flex flex-col gap-4">
			{#each about.languages.skills as language}
				{@const ariaValue = Number(language.ariaValue)}
				{@const value = Number(language.value)}
				<li>
					<strong class="block mb-2">{language.title}</strong>
					<span role="progressbar" aria-valuemax="100" aria-valuemin="0"
						 aria-valuenow={ariaValue} class="flex items-center gap-2">
					{#each Array(10) as _, i}
						<span
							class="w-4 h-4 border-1 border-primary rounded-full {i <= value ?
							'bg-primary' : ''}"></span>
					{/each}
					</span>
				</li>
			{/each}
			</ul>
		</Section>
	</div>
</Section>

<Section title={experience.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={education.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={references.title} classes="bg-black-darkest rounded-xs">

</Section>

<Section title={knowledge.title} classes="bg-black-darkest rounded-xs">

</Section>
