import { getSeo } from "$lib/server/content.js";

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = async () => {
	const nav = {
		primary: [],
		footerPages: [],
		footerContact: [],
	};
	const seo = getSeo();
	return {
		nav,
		seo,
	};
};
