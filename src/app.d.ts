// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			// make sure this path points to your SEO type export
			seo: import("$global/seo/Seo.svelte.types").SEOProps;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
