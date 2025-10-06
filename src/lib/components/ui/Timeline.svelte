<script>
/**
 * @typedef {import('$data/content').TimelineItem} TimelineItem
 * @typedef {Object} Props
 * @property {string} [title]
 * @property {TimelineItem[]} items
 */

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
			<!-- Date badge -->
			<div class="
				inline-block relative mb-3 min-w-42 top-1
				bg-primary text-white text-sm leading-tight px-3 py-1

				xs-mid:absolute xs-mid:right-full xs-mid:mr-5 xs-mid:text-center

				before:content-[''] before:absolute before:inset-y-0 before:right-full
				before:w-[0.65em] before:bg-primary
				before:[clip-path:polygon(100%_0,0_50%,100%_100%)]

				xs-mid:before:hidden
				xs-mid:after:content-[''] xs-mid:after:absolute xs-mid:after:inset-y-0 xs-mid:after:left-full
				xs-mid:after:w-[0.65em] xs-mid:after:bg-primary
				xs-mid:after:[clip-path:polygon(0_0,100%_50%,0_100%)]
			">
				<div class="overflow-hidden">
					{item.from.month} {item.from.year} — <strong>{item.to.month} {item.to.year}</strong>
				</div>
			</div>

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
				<details class="mt-4" id={item.expander.id}>
					<summary
						class="inline-flex items-center gap-2 text-sm text-black-light hover:text-inherit"
						aria-controls={`${item.expander.id}-content`}
					>
						<svg class="size-4 shrink-0" aria-hidden="true"
							 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path
							fill="currentColor" d="M160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>
						<span class="[details[open]_&]:hidden">{item.expander.text ?? 'detailed explanation'}</span>
						<span class="hidden [details[open]_&]:inline">{item.expander.textAlt ?? item.expander.text ?? 'detailed explanation'}</span>
					</summary>
					<div id={`${item.expander.id}-content`} class="mt-4 text-sm prose">
						{@html item.expander.content}
					</div>
				</details>
			{/if}
		</li>
	{/each}
</ol>
