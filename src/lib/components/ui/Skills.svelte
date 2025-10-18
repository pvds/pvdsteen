<script>
/**
 * @typedef {import('$data/content').SkillItem} SkillItem
 * @typedef {import('$data/content').SkillsType} SkillsType
 * @typedef {Object} Props
 * @property {string} [title]
 * @property {SkillsType} [type="line"]
 * @property {SkillItem[]} skills
 */

/** @type {Props} */
let { title, type = "line", skills = [] } = $props();
</script>

<div class="@container">
<ul aria-label={title ?? null}
	class={`${type === 'radial' ?
	'grid grid-cols-1 justify-items-center gap-6 @3xs:grid-cols-2' : ''}
	${type === 'line' ? 'flex flex-col' : ''}
	${type === 'dots' ? 'inline-flex flex-col gap-4' : 'gap-3'}`}>
{#each skills as s, i (s.title)}
	{@const ariaValue = Number(s.ariaValue)}
	{@const value = Number(s.value)}
	{@const isLastOdd = type === 'radial' && skills.length % 2 === 1 && i === skills.length - 1}
	<li class:@3xs:col-span-2={isLastOdd}>
	{#if type === 'dots'}
		<div class="mb-2 flex items-center justify-between gap-2">
			<strong id="skill-title-{i}" class="block font-semibold">{s.title}</strong>
			{#if s.text}
				<p class="text-sm font-light text-black-light">{s.text}</p>
			{/if}
		</div>
		<div role="progressbar" aria-label={s.title} aria-valuemin="0"
			 aria-valuemax="100"
			 aria-valuenow={ariaValue}
			class="flex items-center justify-between gap-2">
			{#each Array(10) as _, i}
				<span class="size-4 border-1 border-primary rounded-full {i < value ?
				'bg-primary' : ''}"></span>
			{/each}
		</div>

	{:else if type === 'radial'}
		<figure class="flex flex-col items-center gap-3">
			<div role="progressbar"  aria-valuemin="0" aria-valuemax="100"
				aria-valuenow={ariaValue} aria-label={s.title}
				style="
					--p: calc({ariaValue} / 100);
					--gap: 0turn;
					--thickness: .375rem;
					--start: 0deg;
				"
				class="
					relative grid size-28 place-items-center

					before:content-[''] before:absolute before:inset-0 before:rounded-full before:text-black/25
					before:[transform:rotate(var(--start))]
					before:[background:conic-gradient(currentColor_0_calc(1turn-var(--gap)),transparent_0)]
					before:[mask:radial-gradient(farthest-side,transparent_calc(100%-var(--thickness)),#000_calc(100%-var(--thickness)))]

					after:content-[''] after:absolute after:inset-0 after:rounded-full after:text-primary
					after:[transform:rotate(var(--start))]
					after:[background:conic-gradient(currentColor_0_calc((1turn-var(--gap))*var(--p)),transparent_0)]
					after:[mask:radial-gradient(farthest-side,transparent_calc(100%-var(--thickness)),#000_calc(100%-var(--thickness)))]
				">
				<span class="pointer-events-none px-2 text-sm font-light text-grayscale-300">
					{s.text ?? (ariaValue >= 50 ? 'proficient' : 'competent')}
				</span>
			</div>
			<strong class="text-center text-base font-semibold tracking-wide text-white">
				{s.title}
			</strong>
		</figure>
	{:else}
		<div class="mb-2 flex items-center justify-between">
			<strong class="font-semibold">{s.title}</strong>
			{#if s.text}<p class="text-sm font-light text-black-light">{s.text}</p>{/if}
		</div>
		<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={ariaValue}
			style={`--p:${ariaValue}%`} aria-label={s.title}
			class="
				relative h-1.5 w-full overflow-hidden rounded-full bg-black
				after:content-[''] after:absolute after:inset-0
				after:h-full after:w-[var(--p)] after:rounded-full after:bg-primary
				after:transition-[width] after:duration-500 after:ease-out
			"></div>
	{/if}
	</li>
{/each}
</ul>
</div>
