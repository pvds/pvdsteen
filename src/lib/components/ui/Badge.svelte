<script>
/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { children } = $props();
</script>

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
		{@render children?.()}
	</div>
</div>
