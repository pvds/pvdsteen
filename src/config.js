// ##################################################
// Configuration
// - only static values here
// - for dynamic values use `dyn.js`
// ##################################################

// URL
export const URL_SUBFOLDER_STAGING = "/pvdsteen";
export const URL_SUBFOLDER_PRODUCTION = "";
export const URL_BASE_STAGING = "https://pvdv.github.io/pvdsteen";
export const URL_BASE_PRODUCTION = "https://pvdsteen.com";

// Site
export const SITE_PREVIEW_URL = "images/preview.webp";

// Organization
export const ORG_NAME = "Peter van der Steen";
export const ORG_NAME_SUFFIX = "platform & design systems lead";
export const ORG_SLOGAN = "Long-term, pragmatic solutions";
export const ORG_DESCRIPTION =
	"Frontend developer with a passion for UX and design systems. I lead shared platforms" +
	" enabling teams to ship scalable, performant and accessible products.";
export const ORG_LOGO_URL = "images/logo.svg";
export const ORG_VAT_ID = ""; // no tax requirements yet
export const ORG_LINKEDIN = "https://linkedin.com/in/pvdsteen";
export const ORG_SAMEAS = [ORG_LINKEDIN];

// Owner
export const OWNER_NAME = "Peter van der Steen";
export const OWNER_LOCATION = "Leiden, The Netherlands";
export const OWNER_PROFESSION = "FE Platform developer";
export const OWNER_IMAGE = "images/local/pvdsteen-800.webp";
export const OWNER_LINKEDIN = "https://www.linkedin.com/in/pvdsteen";
export const OWNER_SAMEAS = [OWNER_LINKEDIN];
export const OWNER_ALUMNI_OF = "Amsterdam University of Applied Sciences";
export const OWNER_KNOWS_ABOUT = [
	"Frontend Development",
	"Software Development",
	"Web Development",
	"Web Performance",
	"User Experience",
	"Design Systems",
	"Complex Systems",
	"Accessibility",
	"Mentoring",
	"Agile",
];

// Contact
export const CONTACT_PHONE = "+31 6 104 25 975";
export const CONTACT_EMAIL = "pvdsteen@gmail.com";
export const CONTACT_STREET = "Virulypad 61";
export const CONTACT_CITY = "Leiden";
export const CONTACT_POSTAL = "2316 ZT";
export const CONTACT_COUNTRY = "NL";

// SEO
/** @type {import('$global/seo/Seo.svelte.types').SEOProps} */
export const SEO_DEFAULT = {
	siteName: ORG_NAME,
	imageURL: SITE_PREVIEW_URL,
	logo: ORG_LOGO_URL,
	author: OWNER_NAME,
	type: "website",
	index: false,
	twitter: false,
	openGraph: true,
};
export const SEO_USE_AGGREGATE_RATING = false;

// Files
export const IMAGES_FILE = "images.json";

// Directories
export const IMAGE_INPUT_DIR = "images";
export const IMAGE_OUTPUT_DIR = "static/images";
export const REPORTS_DIR = ".tmp/reports";
export const BUILD_DIR_PRODUCTION = "build/production";
export const BUILD_DIR_STAGING = "build/staging";
export const JSON_OUTPUT_DIR = "src/data/generated";

// Image processing
export const IMAGE_EXT = "webp";
export const IMAGE_SIZES = [320, 480, 640, 800, 960, 1280, 1920];
export const IMAGE_THUMBNAIL_SIZE = IMAGE_SIZES[0];
export const IMAGE_FILENAME_TEMPLATE = "{base}-{size}.{ext}";
// biome-ignore format: better for readability
export const IMAGE_EXTENSIONS = [
	"avif",
	"dz",
	"fits",
	"gif",
	"heif",
	"input",
	"jpeg",
	"jpg",
	"jp2",
	"jxl",
	"magick",
	"openslide",
	"pdf",
	"png",
	"ppm",
	"raw",
	"svg",
	"tiff",
	"tif",
	"v",
	"webp",
];

// Ports
export const PORT = 4173;
export const DEBUG_PORT = 9222;

// Params
export const PARAMS_PAGES_EXCLUDE = ["home"];

// Lighthouse
export const THRESHOLDS = {
	performance: 99,
	accessibility: 100,
	"best-practices": 100,
	seo: 100,
};

/**
 * Button themes
 * @type {{primary: string, secondary: string, tertiary: string}}
 */
export const BUTTON_THEME = {
	primary:
		"bg-primary-dark hover:bg-primary-darker font-semibold text-white rounded-full",
	secondary:
		"border-2 border-primary-dark hover:border-primary-darker font-semibold rounded-full",
	tertiary:
		"hover:text-secondary-dark font-semibold underline underline-offset-2",
};

// Unicode
export const U_NBSP = "\u00A0";
