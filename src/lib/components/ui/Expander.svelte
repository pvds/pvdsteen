<script>
/**
 * @typedef {import('$data/content').Expander} Expander
 * @typedef {Object} Props
 * @property {string} id
 * @property {string} [text]
 * @property {string} [textAlt]
 * @property {string} content
 */

/** @type {Props} */
let { id, text, textAlt, content } = $props();
</script>

<details class="mt-3" id={id}>
	<summary
		class="inline-flex items-center gap-2 text-sm text-black-light hover:text-inherit"
		aria-controls={`${id}-content`}
	>
		<svg class="size-4 shrink-0" aria-hidden="true" viewBox="0 0 640 640">
			<path
				fill="currentColor"
				d="M160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"
			/>
		</svg>

		<span class="[details[open]_&]:hidden">
			{text ?? 'more'}
		</span>
		<span class="hidden [details[open]_&]:inline">
			{textAlt ?? text ?? 'less'}
		</span>
	</summary>

	<div id={`${id}-content`} class="mt-3 text-sm prose">
		{@html content}
	</div>
</details>

<style>
	/* Browser supports interpolate-size */
	@supports (interpolate-size: allow-keywords) {
		:root {
			interpolate-size: allow-keywords;
		}

		::details-content {
			transition: height 0.5s ease, content-visibility 0.5s ease allow-discrete;
			height: 0;
			overflow: clip;
		}

		[open]::details-content {
			height: auto;
		}
	}
</style>
