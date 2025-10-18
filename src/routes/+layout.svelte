<script>
import { onNavigate } from "$app/navigation";
import Branding from "$global/Branding.svelte";
import Header from "$global/Header.svelte";
import Seo from "$global/seo/Seo.svelte";
import "../app.css";
import Skip from "$global/Skip.svelte";
import Button from "$ui/Button.svelte";

let { children } = $props();
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
	class="relative flex flex-col p-4 md-mid:flex-row gap-4 app min-h-svh min-w-xs max-w-7xl mx-auto">
	<Skip />

	<div class="md-mid:w-[18rem] flex-none">
		<div class="md-mid:sticky top-4 z-3">
			<Header>
				<Branding />
			</Header>
			<aside class="flex flex-wrap md-mid:flex-col gap-4 mt-4">
				<!--<Button href="/resume.pdf" isExternal={true} title="Download Resume"/>-->
				<Button href="//www.linkedin.com/in/pvdsteen" isExternal>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-8">
						<path d="M160 96c-35 0-64 29-64 64v320c0 35 29 64 64 64h320c35 0 64-29 64-64V160c0-35-29-64-64-64H160zm5 170h67v214h-67V266zm72-67a38 38 0 1 1-77 0 38 38 0 0 1 77 0zm177 281V376c0-25-1-57-35-57s-39 27-39 55v106h-67V266h64v29h1c9-16 30-34 63-34 67 0 79 44 79 102v117h-66z"/>
					</svg>
					<span>LinkedIn</span>
				</Button>
				<Button href="//github.com/pvds" isExternal>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="size-8">
						<path d="M238 461c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3s6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2c1-2-1-4-4-5s-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zm66-383A240 240 0 0 0 72 316c0 111 70 206 170 239 12 3 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 25 2 38 26 22 38 59 27 73 21 2-16 9-27 16-34-56-6-112-14-112-111 0-27 7-41 23-58-2-7-11-34 3-68 21-7 69 27 69 27a235 235 0 0 1 126 0s48-34 69-27c13 34 5 61 2 68 16 17 26 31 26 58 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 0 0 168-239c0-139-112-244-251-244zM169 417c-1 1-1 3 1 5s4 2 5 1 1-3-1-5c-1-2-3-2-5-1zm-11-8 3 4c1 1 3 0 4-1s0-3-2-4l-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"/>
					</svg>
					<span>GitHub</span>
				</Button>
			</aside>
		</div>
	</div>

	<main id="main-content" class="flex flex-col gap-4" tabindex="-1">
		{@render children()}
	</main>
</div>
