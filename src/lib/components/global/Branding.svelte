<script>
import {
	ORG_DESCRIPTION,
	OWNER_LOCATION,
	OWNER_NAME,
	OWNER_PROFESSION,
} from "$config";
import Image from "$ui/image/Image.svelte";
</script>

<section role="banner" class="branding flex flex-col items-center text-center">
	<Image classes="rounded-full border-8 border-secondary-black"
		   widthClass="w-[12rem] max-w-full"
		   image="pvdsteen"
		   alt="{`${OWNER_NAME}, ${ORG_DESCRIPTION}`}"
		   sizes="12rem"
		   priority={true}/>
	<h1 class="branding__name text-2xl font-bold mt-2">{OWNER_NAME}</h1>
	<p class="branding__location font-light text-secondary-light mb-4">{OWNER_LOCATION}</p>
	<p class="branding__profession text-xl">{OWNER_PROFESSION}</p>
</section>
