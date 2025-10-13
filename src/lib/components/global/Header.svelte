<script>
import Section from "$layout/Section.svelte";

/** @type {{children: import('svelte').Snippet}} */
let { children } = $props();
</script>

<header>
	<Section customSpacing="p-4 md-mid:p-6" classes="bg-secondary-darker rounded-xs">
		{@render children()}
	</Section>
</header>
