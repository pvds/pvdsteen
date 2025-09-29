<script>
import { onMount } from "svelte";
import { BUTTON_THEME } from "$config";
import Section from "$layout/Section.svelte";

let isDisabled = $state(false);

onMount(() => {
	isDisabled = localStorage.getItem("umami.disabled") === "1";
});

function toggleTracking() {
	if (isDisabled) {
		localStorage.removeItem("umami.disabled"); // Enable tracking
	} else {
		localStorage.setItem("umami.disabled", "1"); // Disable tracking
	}
	isDisabled = !isDisabled;
}
</script>

<Section title="Configure Analytics tracking" classes="bg-black-darkest rounded-xs">
	<p>
		In order to avoid tracking your own visits, you can disable tracking.<br/>
		<strong class="font-medium">Tracking is <span
			class="font-bold">{isDisabled ? "DISABLED" : "ENABLED"}</span>
			on this device using this browser</strong>.
	</p>
	<div class="mt-12 flex flex-wrap gap-2">
	<button onclick={toggleTracking}
		class="flex flex-col px-4 py-2 transition text-center leading-tight {BUTTON_THEME.primary}">
		<span><span class="font-bold">{isDisabled ? "START" : "STOP"}</span> tracking</span>
		<small class="text-primary-light">This device/browser combination</small>
	</button>
	<a href="https://cloud.umami.is/share/WuhP56NywNrqemEA/pvdsteen.com" target="_blank" rel="noopener"
	   class="px-4 py-2 no-underline transition text-center flex items-center {BUTTON_THEME.secondary}">View
		Analytics</a>
	</div>
	{#if isDisabled}
	<div
		class="mt-8 p-4 bg-black-darker text-black-light rounded-xs">
		<strong class="text-base">Please note</strong>
		<ul class="mt-2">
			<li>You need to <strong>disable tracking for every device and browser
				combination</strong> you use</li>
			<li>If you <strong>clear your browser data, you will need to disable tracking
				again</strong></li>
		</ul>
	</div>
	{/if}
</Section>
