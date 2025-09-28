import { getHome, getSeo } from "$lib/server/content.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ route }) => {
	const slug = route.id.replace("/", "");
	const page = getHome(slug);
	const seo = getSeo(page, "WebPage");

	return { page, seo };
};
