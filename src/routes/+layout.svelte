<script>
import { onNavigate } from "$app/navigation";
import Branding from "$global/Branding.svelte";
import Header from "$global/Header.svelte";
import Skip from "$global/Skip.svelte";
import Seo from "$global/seo/Seo.svelte";
import "../app.css";

let { children, data } = $props();
const disableViewTransitions = true;

onNavigate((navigation) => {
	if (!document.startViewTransition || disableViewTransitions) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<Seo/>

<div
	class="relative flex flex-col p-4 md:flex-row gap-4 app min-h-svh max-w-6xl mx-auto">
	<Skip />

	<div class="md:max-w-xs">
		<Header>
			<Branding />
		</Header>
	</div>

	<main id="main-content" class="grow bg-black-darkest rounded-xs" tabindex="-1">
		{@render children()}
	</main>
</div>
