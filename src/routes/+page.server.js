import contentEn from "$data/content-en.js";
import { getHome, getSeo } from "$lib/server/content.js";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const page = getHome("home");
	const content = contentEn;
	const seo = getSeo(page, "HomePage");

	return { page, content, seo };
};
