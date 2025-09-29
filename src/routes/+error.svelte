<script>
import { page } from "$app/state";
import Section from "$layout/Section.svelte";
</script>

<Section title={page.status.toString()}>
	{page?.error?.message}
</Section>
