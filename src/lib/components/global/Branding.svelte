<script>
import { resolve } from "$app/paths";
import { ORG_NAME, ORG_NAME_SUFFIX } from "$config";
</script>

<section role="banner">
	<a class="flex gap-3 items-center" href={resolve('/')}
	   aria-label="Go to homepage">
		<div class="relative top-[-6px] flex items-baseline">
			<strong class="font-medium text-2xl text-primary-lightest">{ORG_NAME}</strong>
			<p class="ml-2 text-primary-light text-nowrap">{ORG_NAME_SUFFIX}</p>
		</div>
	</a>
</section>
