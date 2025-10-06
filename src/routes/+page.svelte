<script>
import Section from "$layout/Section.svelte";
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
			<ul class="flex flex-col gap-4">
			{#each about.languages.skills as language}
				{@const ariaValue = Number(language.ariaValue)}
				{@const value = Number(language.value)}
				<li>
					<strong class="block font-semibold mb-2">{language.title}</strong>
					<div role="progressbar" aria-valuemax="100" aria-valuemin="0"
						 aria-valuenow={ariaValue} class="flex items-center gap-2">
					{#each Array(10) as _, i}
						<span
							class="w-4 h-4 border-1 border-primary rounded-full {i <= value ?
							'bg-primary' : ''}"></span>
					{/each}
					</div>
				</li>
			{/each}
			</ul>
		</Section>
		<Section title={about.soft.title} size="sm">
			<ul class="flex flex-col gap-3">
			{#each about.soft.skills as skill}
				{@const ariaValue = Number(skill.ariaValue)}
				<li>
					<div class="flex justify-between items-center mb-2">
						<strong class="font-semibold">{skill.title}</strong>
						<p class="text-sm font-light text-black-light">{skill.text}</p>
					</div>
					<div
						role="progressbar"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow={ariaValue}
						style={`--p:${ariaValue}%`}
						class="
							relative h-1.5 w-full rounded-full bg-black overflow-hidden
							after:content-[''] after:absolute after:inset-0
							after:w-[var(--p)] after:h-full after:rounded-full
							after:bg-primary
							after:transition-[width] after:duration-500 after:ease-out
						"
					></div>
				</li>
			{/each}
			</ul>
		</Section>
		<Section title={about.soft.title} size="sm">
			<ul class="flex flex-col gap-3">
				{#each about.interests.skills as skill}
					{@const ariaValue = Number(skill.ariaValue)}
					<li>
						<div class="flex justify-between items-center mb-2">
							<strong class="font-semibold">{skill.title}</strong>
							<p class="text-sm font-light text-black-light">{skill.text}</p>
						</div>
						<div
							role="progressbar"
							aria-valuemin="0"
							aria-valuemax="100"
							aria-valuenow={ariaValue}
							style={`--p:${ariaValue}%`}
							class="
							relative h-1.5 w-full rounded-full bg-black overflow-hidden
							after:content-[''] after:absolute after:inset-0
							after:w-[var(--p)] after:h-full after:rounded-full
							after:bg-primary
							after:transition-[width] after:duration-500 after:ease-out
						"
						></div>
					</li>
				{/each}
			</ul>
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

</Section>

<Section title={knowledge.title} classes="bg-black-darkest rounded-xs">

</Section>
