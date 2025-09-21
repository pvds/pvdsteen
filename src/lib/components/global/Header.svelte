<script>
import { onDestroy, onMount } from "svelte";
import Section from "$layout/Section.svelte";

/** @type {IntersectionObserver} */
let observer;
/** @type {HTMLDivElement} */
let sentinel;
let isCompact = $state(false);

/** @type {{children: import('svelte').Snippet}} */
let { children } = $props();

onMount(() => {
	observer = new IntersectionObserver(
		([entry]) => {
			isCompact = !entry.isIntersecting;
		},
		{ threshold: 0 },
	);

	if (sentinel) {
		observer.observe(sentinel);
	}
});

onDestroy(() => {
	if (observer && sentinel) {
		observer.unobserve(sentinel);
		observer.disconnect();
	}
});
</script>

<div class="header relative transition-all md:sticky {isCompact ? 'md:-top-4' : 'md:top-0'} z-3">
	<Section classes="z-3">
		<header class="flex gap-4">
			{@render children()}
		</header>
	</Section>
</div>
<div bind:this={sentinel} class="sentinel relative -top-12"></div>
