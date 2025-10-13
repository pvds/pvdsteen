<script>
/**
 * @typedef {Object} Props
 * @property {string} href
 * @property {string} [classes='']
 * @property {boolean} [isExternal=false]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let { href, classes, isExternal, children } = $props();
</script>

<a {href}
   class="grow shrink-0 flex py-2 px-4 rounded-xs bg-black-darkest hover:bg-primary text-xl font-semibold justify-center items-center gap-2 {classes}"
   target={isExternal ?
"_blank" :
null}>
	{@render children?.()}
</a>
