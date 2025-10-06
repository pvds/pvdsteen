/**
 * @typedef {import('./content.js').Meta} Meta
 * @typedef {import('./content.js').NavItem} NavItem
 * @typedef {import('./content.js').Card} Card
 * @typedef {import('./content.js').LinkItem} LinkItem
 * @typedef {import('./content.js').About} About
 * @typedef {import('./content.js').Experience} Experience
 * @typedef {import('./content.js').Education} Education
 * @typedef {import('./content.js').References} References
 * @typedef {import('./content.js').Knowledge} Knowledge
 * @typedef {import('./content.js').SkillSection} SkillSection
 * @typedef {import('./content.js').Content} Content
 **/

/** @type {Meta} **/
export const meta = {
	language: "nl",
	slug: "/nl/",
	title: "Peter van der Steen | Front-end developer en user experience designer",
	description:
		"Als front-end developer ontwikkel ik een optimale gebruikerservaring met data gedreven interface en interaction design. Bekijk mijn CV!",
	author: "Peter van der Steen",
	location: "Leiden, Nederland",
	region: "Zuid-Holland",
};

/** @type {NavItem[]} **/
export const nav = [
	{
		title: "Over mij",
		id: "over",
	},
	{
		title: "Ervaring",
		id: "ervaring",
	},
	{
		title: "Opleiding",
		id: "opleiding",
	},
	{
		title: "Referenties",
		id: "referenties",
	},
	{
		title: "Kennis",
		id: "kennis",
	},
];

/** @type {Card} **/
export const card = {
	name: "Peter van der Steen",
	profession: {
		first: "Front-end developer",
		second: "UX designer",
	},
};

/** @type {LinkItem[]} **/
export const links = [
	{
		text: "Download CV",
		ref: "/dist/files/cv-pvdsteen.pdf",
		slug: "resume",
		icon: "download",
		visible: true,
		download: true,
	},
	{
		text: "LinkedIn Profiel",
		ref: "https://www.linkedin.com/in/pvdsteen",
		slug: "linkedin",
		icon: "linkedin",
		visible: true,
		target: "_blank",
	},
	{
		text: "GitHub Profiel",
		ref: "https://github.com/pvds",
		slug: "github",
		icon: "github",
		visible: true,
		target: "_blank",
	},
];

/** @type {About} **/
export const about = {
	title: "Over mij",
	intro: {
		content: "./content-nl/about-intro.md",
		expander: {
			id: "about-intro-expander",
			content: "./content-nl/about-intro-expander.md",
			triggerText: "verder lezen",
		},
	},
	personal: {
		title: "Personalia",
		definitions: [
			{
				term: "Naam",
				def: "Peter van der Steen",
			},
			{
				term: "Geboren",
				def: "12 July 1986",
			},
			{
				term: "Locatie",
				def: "Leiden, the Netherlands",
			},
			{
				term: "Email",
				def: "<a href='mailto:pvdsteen@gmail.com'>pvdsteen@gmail.com</a>",
			},
			{
				term: "Telefoon",
				def: "+31 6 104 25 975",
			},
			{
				term: "Skype",
				def: "rockfromtherock",
				id: "skype",
				class: "is-optional",
			},
			{
				term: "Rijbewijs",
				def: "Auto",
			},
			{
				term: "Stemming",
				def: "Uitmuntend",
				id: "mood",
				class: "is-optional",
			},
		],
	},
	languages: {
		title: "Talen",
		type: "dots",
		skills: [
			{
				title: "Nederlands",
				ariaValue: "100",
				value: "1",
				text: "moedertaal",
			},
			{
				title: "Engels",
				ariaValue: "90",
				value: "0.9",
				text: "professioneel",
			},
			{
				title: "Frans",
				ariaValue: "30",
				value: "0.3",
				text: "basis",
			},
			{
				title: "Grieks",
				ariaValue: "10",
				value: "0.1",
				text: "kleuter",
			},
		],
	},
	soft: {
		title: "Persoonlijke kwaliteiten",
		type: "line",
		skills: [
			{
				title: "Werk ethos",
				ariaValue: "100",
				value: "1",
				text: "ga tot het uiterste",
			},
			{
				title: "Kritisch denken",
				ariaValue: "95",
				value: "0.95",
				text: "leuk, puzzels!",
			},
			{
				title: "Creativiteit",
				ariaValue: "95",
				value: "0.95",
				text: "is besmettelijk, deel het",
			},
			{
				title: "Communicatie",
				ariaValue: "95",
				value: "0.95",
				text: "ik houd van praten!",
			},
			{
				title: "Luisteren",
				ariaValue: "90",
				value: "0.9",
				text: "als ik niet praat",
			},
			{
				title: "Teamwork",
				ariaValue: "85",
				value: "0.85",
				text: "hoezee, samenwerking!",
			},
			{
				title: "Judgement",
				ariaValue: "80",
				value: "0.8",
				text: "eerst denken, dan doen",
			},
		],
	},
	interests: {
		title: "Interesses",
		type: "line",
		skills: [
			{
				title: "Technologie",
				ariaValue: "100",
				value: "1",
				text: "software/hardware",
			},
			{
				title: "Wetenschap",
				ariaValue: "95",
				value: "0.95",
				text: "sociaal/natuur/biologie",
			},
			{
				title: "Culinair",
				ariaValue: "95",
				value: "0.95",
				text: "koken/proeven",
			},
			{
				title: "Reizen",
				ariaValue: "90",
				value: "0.9",
				text: "Azië/Griekenland",
			},
			{
				title: "Natuur",
				ariaValue: "90",
				value: "0.9",
				text: "rust/ontspanning!",
			},
			{
				title: "Cultuur",
				ariaValue: "85",
				value: "0.85",
				text: "muziek/boeken/toneel",
			},
			{
				title: "Sport",
				ariaValue: "80",
				value: "0.8",
				text: "rennen/klimmen",
			},
		],
	},
};

/** @type {Experience} **/
export const experience = {
	title: "Ervaring",
	timeline: [
		{
			from: {
				month: null,
				year: "Now",
			},
			to: {
				month: null,
				year: "?",
			},
			function:
				'Front-end developer - <span class="nowrap">UX designer</span>',
			organization: "Uw bedrijf?",
			content: "./content-nl/experience-timeline-your-company.md",
			expander: {
				id: "timeline-me-expander",
				text: "waarom ik?",
				textAlt: "minder over jezelf graag..",
				content:
					"./content-nl/experience-timeline-your-company-expander.md",
			},
		},
		{
			from: {
				month: "Sept",
				year: 2017,
			},
			to: {
				month: null,
				year: "now",
			},
			function: "FE/UX development specialist",
			organization: "Priva",
			content: "./content-nl/experience-timeline-priva.md",
		},
		{
			from: {
				month: "Mei",
				year: 2013,
			},
			to: {
				month: "Jun",
				year: 2017,
			},
			function: "Front-end developer",
			organization: "Just Walk",
			content: "./content-nl/experience-timeline-just-walk.md",
			expander: {
				id: "timeline-justwalk-expander",
				text: "uitgebreide omschrijving",
				textAlt: "minder is meer..",
				content:
					"./content-nl/experience-timeline-just-walk-expander.md",
			},
		},
		{
			from: {
				month: "Apr",
				year: 2011,
			},
			to: {
				month: "Apr",
				year: 2016,
			},
			function:
				'Owner - <span class="nowrap">UX Designer</span> / <span class="nowrap">Developer</span>',
			organization: "Solid Core Web Solutions",
			content:
				"./content-nl/experience-timeline-solid-core-web-solutions.md",
		},
		{
			from: {
				month: "Sep",
				year: 2010,
			},
			to: {
				month: "Mei",
				year: 2011,
			},
			function: "Partner - Developer",
			organization: "Triangle Productions",
			content: "./content-nl/experience-timeline-triangle-productions.md",
		},
		{
			from: {
				month: "Jun",
				year: 2008,
			},
			to: {
				month: "Aug",
				year: 2009,
			},
			function: "Mechanical Designer",
			organization: "Bluewater Energy Services",
			content:
				"./content-nl/experience-timeline-bluewater-energy-services-designer.md",
		},
		{
			from: {
				month: "Jun",
				year: 2006,
			},
			to: {
				month: "Jun",
				year: 2008,
			},
			function: "Technical Document Controller",
			organization: "Bluewater Energy Services",
			content:
				"./content-nl/experience-timeline-bluewater-energy-services-controller.md",
		},
	],
};

/** @type {Education} **/
export const education = {
	title: "Opleiding",
	timeline: [
		{
			from: {
				month: "Aug",
				year: 2010,
			},
			to: {
				month: "Jun",
				year: 2011,
			},
			function: "Interactieve Media",
			organization: "Hogeschool van Amsterdam",
			content: "./content-nl/education-timeline.md",
			expander: {
				id: "timeline-iam-expander",
				text: "meer informatie",
				textAlt: "minder informatie graag..",
				content: "./content-nl/education-timeline-expander.md",
			},
		},
	],
};

/** @type {References} **/
export const references = {
	title: "Referenties",
	reference: [
		{
			image: "avatar-marius",
			alt: "referentie door",
			author: "Marius van der Kooy",
			function: "Manager",
			organization: "Just Walk",
			content: "./content-nl/references-reference-just-walk-marius.md",
			expander: {
				id: "reference-marius-expander",
				text: "verder lezen",
				textAlt: "teveel informatie..",
				content:
					"./content-nl/references-reference-just-walk-marius-expander.md",
			},
		},
		{
			image: "avatar-bart",
			alt: "referentie door",
			author: "Bart Lageweg",
			function: "Eigenaar",
			organization: "Bizway",
			content: "./content-nl/references-reference-bizway-bart.md",
		},
		{
			image: "avatar-danny",
			alt: "referentie door",
			author: "Danny Visser",
			function: "Eigenaar",
			organization: "Just Walk",
			content: "./content-nl/references-reference-just-walk-danny.md",
		},
	],
};

/** @type {SkillSection } **/
const programming = {
	title: "Talen",
	type: "line",
	skills: [
		{
			title: "HTML",
			ariaValue: "95",
			value: "0.95",
			text: "expert",
			textAlt: "I dream semantically",
		},
		{
			title: "CSS",
			ariaValue: "95",
			value: "0.95",
			text: "expert",
			textAlt: "my wife Sass I'm responsive",
		},
		{
			title: "JS",
			ariaValue: "80",
			value: "0.8",
			text: "gevorderd",
			textAlt: "let me promise",
		},
		{
			title: "PHP",
			ariaValue: "70",
			value: "0.7",
			text: "competent",
			textAlt: "I love recursive acronyms",
		},
		{
			title: "Bash",
			ariaValue: "60",
			value: "0.6",
			text: "competent",
			textAlt: "I believe in reincarnation",
		},
		{
			title: "Ruby",
			ariaValue: "40",
			value: "0.4",
			text: "beginner",
			textAlt: "busy polishing my gems",
		},
		{
			title: "Python",
			ariaValue: "30",
			value: "0.3",
			text: "novice",
			textAlt: "still a fluffy little rabbit",
		},
	],
};

/** @type { SkillSection } **/
const techniques = {
	title: "Technieken",
	type: "line",
	skills: [
		{
			title: "Principes",
			ariaValue: "90",
			value: "0.9",
			text: "YAGNI/DRY/KISS",
		},
		{
			title: "Compatibiliteit",
			ariaValue: "85",
			value: "0.85",
			text: "browser/platform/device",
		},
		{
			title: "Automatisering",
			ariaValue: "80",
			value: "0.8",
			text: "task runners/build tools",
		},
		{
			title: "Design Patterns",
			ariaValue: "80",
			value: "0.8",
			text: "structure/create/behave",
		},
		{
			title: "Paradigmas",
			ariaValue: "75",
			value: "0.75",
			text: "object/functional/procedural",
		},
		{
			title: "Beveiliging",
			ariaValue: "70",
			value: "0.7",
			text: "CORS/XXS",
		},
		{
			title: "Testing",
			ariaValue: "60",
			value: "0.6",
			text: "unit/integration/quality",
		},
	],
};

/** @type { SkillSection } **/
const contents = {
	title: "Structuur",
	type: "chart",
	skills: [
		{
			title: "Semantiek",
			ariaValue: "90",
			value: "0.9",
			text: "gevorderd",
		},
		{
			title: "Microdata",
			ariaValue: "90",
			value: "0.9",
			text: "gevorderd",
		},
		{
			title: "JSON/XML",
			ariaValue: "85",
			value: "0.85",
			text: "gevorderd",
		},
		{
			title: "Templating",
			ariaValue: "75",
			value: "0.75",
			text: "competent",
		},
		{
			title: "Toegankelijkheid",
			ariaValue: "70",
			value: "0.7",
			text: "competent",
		},
	],
};

/** @type { SkillSection } **/
const visualisation = {
	title: "Visualisatie",
	type: "chart",
	skills: [
		{
			title: "Sass/Scss",
			ariaValue: "95",
			value: "0.95",
			text: "expert",
		},
		{
			title: "Responsive",
			ariaValue: "95",
			value: "0.95",
			text: "expert",
		},
		{
			title: "Grid systems",
			ariaValue: "90",
			value: "0.9",
			text: "expert",
		},
		{
			title: "CSS Animatie",
			ariaValue: "90",
			value: "0.9",
			text: "expert",
		},
		{
			title: "Photoshop",
			ariaValue: "70",
			value: "0.7",
			text: "competent",
		},
	],
};

/** @type { SkillSection } **/
const interaction = {
	title: "Interactie",
	type: "chart",
	skills: [
		{
			title: "ES5",
			ariaValue: "85",
			value: "0.85",
			text: "gevorderd",
		},
		{
			title: "XHR/AJAX",
			ariaValue: "85",
			value: "0.85",
			text: "gevorderd",
		},
		{
			title: "jQuery",
			ariaValue: "85",
			value: "0.85",
			text: "gevorderd",
		},
		{
			title: "ES6",
			ariaValue: "70",
			value: "0.7",
			text: "competent",
		},
		{
			title: "Frameworks",
			ariaValue: "25",
			value: "0.25",
			text: "beginner",
		},
	],
};

/** @type { SkillSection } **/
const development = {
	title: "Development",
	type: "line",
	skills: [
		{
			title: "PHPStorm/Webstorm",
			ariaValue: "95",
			value: "0.95",
			text: "IDE",
		},
		{
			title: "Sublime Text",
			ariaValue: "85",
			value: "0.85",
			text: "editor",
		},
		{
			title: "Git",
			ariaValue: "80",
			value: "0.8",
			text: "versioning",
		},
		{
			title: "Command line/CLI",
			ariaValue: "80",
			value: "0.8",
			text: "terminal",
		},
		{
			title: "Valet",
			ariaValue: "80",
			value: "0.8",
			text: "minimal NGINX dev environment",
		},
		{
			title: "Homestead",
			ariaValue: "60",
			value: "0.6",
			text: "Vagrant box",
		},
	],
};

/** @type { SkillSection } **/
const cmsFrameworks = {
	title: "CMS/frameworks",
	type: "line",
	skills: [
		{
			title: "Wordpress",
			ariaValue: "95",
			value: "0.95",
			text: "bedrock/sage",
		},
		{
			title: "Laravel",
			ariaValue: "80",
			value: "0.8",
			text: "mix/blade",
		},
		{
			title: "Blogdown",
			ariaValue: "70",
			value: "0.7",
			text: "mustache/markdown",
		},
		{
			title: "Drupal",
			ariaValue: "60",
			value: "0.6",
			text: "CMS",
		},
		{
			title: "Joomla",
			ariaValue: "55",
			value: "0.55",
			text: "CMS",
		},
		{
			title: "Lumen",
			ariaValue: "20",
			value: "0.2",
			text: "Laravel microframework",
		},
	],
};

/** @type { SkillSection } **/
const packageManagers = {
	title: "Package managers",
	type: "line",
	skills: [
		{
			title: "Bower",
			ariaValue: "90",
			value: "0.9",
			text: "front-end",
		},
		{
			title: "NPM",
			ariaValue: "85",
			value: "0.85",
			text: "task builder/front-end",
		},
		{
			title: "Homebrew",
			ariaValue: "75",
			value: "0.75",
			text: "OSX",
		},
		{
			title: "Composer",
			ariaValue: "75",
			value: "0.75",
			text: "PHP",
		},
	],
};

/** @type { SkillSection } **/
const buildTools = {
	title: "Build tools",
	type: "line",
	skills: [
		{
			title: "NPM scripts",
			ariaValue: "90",
			value: "0.9",
			text: "cli/compiling/testing",
		},
		{
			title: "Grunt/Gulp",
			ariaValue: "85",
			value: "0.85",
			text: "build systems",
		},
		{
			title: "Webpack",
			ariaValue: "75",
			value: "0.75",
			text: "module bundler",
		},
		{
			title: "Brunch",
			ariaValue: "60",
			value: "0.6",
			text: "simplified build system",
		},
	],
};

/** @type {Knowledge} **/
export const knowledge = {
	title: "Kennis",
	content: "./content-nl/knowledge.md",
	programming,
	techniques,
	contents,
	visualisation,
	interaction,
	development,
	cmsFrameworks,
	packageManagers,
	buildTools,
};

/** @type {Content} **/
export const contentNl = {
	meta,
	nav,
	card,
	links,
	about,
	experience,
	education,
	references,
	knowledge,
};

export default contentNl;
