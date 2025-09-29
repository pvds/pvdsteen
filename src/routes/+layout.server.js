import { getSeo } from "$lib/server/content.js";

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const seo = getSeo();
	return {
		seo,
	};
};
