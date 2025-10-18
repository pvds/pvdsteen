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
 * @typedef {import('./content.js').Personality} Personality
 * @typedef {import('./content.js').SkillSection} SkillSection
 * @typedef {import('./content.js').Content} Content
 **/

import { markdownFileToHtml } from "$lib/server/utils.js";

/** @type {Meta} */
export const meta = {
	language: "en",
	title: "Peter van der Steen | Front-end developer and user experience designer",
	description:
		"Front-end developer creating an optimal user experience, improving interface and interaction using data driven design. Check out my resumé!",
	author: "Peter van der Steen",
	location: "Leiden, the Netherlands",
	region: "South Holland",
};

/** @type {NavItem[]} */
export const nav = [
	{
		title: "About me",
		id: "about",
	},
	{
		title: "Experience",
		id: "experience",
	},
	{
		title: "Education",
		id: "education",
	},
	{
		title: "References",
		id: "references",
	},
	{
		title: "Knowledge",
		id: "knowledge",
	},
];

/** @type {Card} */
export const card = {
	name: "Peter van der Steen",
	profession: {
		first: "Front-end developer",
		second: "UX designer",
	},
};

/** @type {LinkItem[]} */
export const links = [
	{
		text: "Download Resumé",
		ref: "/dist/files/resume-pvdsteen.pdf",
		slug: "resume",
		icon: "download",
		visible: true,
		download: true,
	},
	{
		text: "LinkedIn",
		ref: "https://www.linkedin.com/in/pvdsteen",
		slug: "linkedin",
		icon: "linkedin",
		visible: true,
		target: "_blank",
	},
	{
		text: "GitHub",
		ref: "https://github.com/pvds",
		slug: "github",
		icon: "github",
		visible: true,
		target: "_blank",
	},
];

/** @type {About} */
export const about = {
	title: "About me",
	intro: {
		content: markdownFileToHtml("src/data/content-en/about-intro.md"),
		expander: {
			id: "about-intro-expander",
			content: markdownFileToHtml(
				"src/data/content-en/about-intro-expander.md",
			),
			text: "read more",
			textAlt: "less is more",
		},
	},
	personal: {
		title: "Personal information",
		definitions: [
			{
				term: "Name",
				def: "Peter van der Steen",
			},
			{
				term: "Birth date",
				def: "12 July 1986",
			},
			{
				term: "Location",
				def: "Leiden, the Netherlands",
			},
			{
				term: "Email",
				def: '<a href="mailto:pvdsteen@gmail.com">pvdsteen<wbr>@gmail.com</a>',
			},
			{
				term: "Phone",
				def: "+31 6 104 25 975",
			},
			{
				term: "License",
				def: "Car (B)",
			},
			{
				term: "Mood",
				def: "Zealous",
				id: "mood",
			},
		],
	},
	languages: {
		title: "Languages",
		type: "dots",
		skills: [
			{
				title: "Dutch",
				ariaValue: "100",
				value: "10",
				text: "native",
			},
			{
				title: "English",
				ariaValue: "90",
				value: "9",
				text: "professional",
			},
			{
				title: "French",
				ariaValue: "40",
				value: "4",
				text: "elementary",
			},
			{
				title: "Greek",
				ariaValue: "20",
				value: "2",
				text: "toddler",
			},
		],
	},
	soft: {
		title: "Soft skills",
		type: "line",
		skills: [
			{
				title: "Work ethic",
				ariaValue: "100",
				value: "1",
				text: "I give a damn!",
			},
			{
				title: "Critical thinking",
				ariaValue: "95",
				value: "0.95",
				text: "yummy, puzzles",
			},
			{
				title: "Creativity",
				ariaValue: "95",
				value: "0.95",
				text: "it's contagious, pass it on",
			},
			{
				title: "Communication",
				ariaValue: "95",
				value: "0.95",
				text: "I love talking",
			},
			{
				title: "Listening",
				ariaValue: "90",
				value: "0.9",
				text: "when I'm not talking",
			},
			{
				title: "Teamwork",
				ariaValue: "85",
				value: "0.85",
				text: "hurray, collaboration!",
			},
			{
				title: "Judgement",
				ariaValue: "80",
				value: "0.8",
				text: "crystal clear",
			},
		],
	},
	interests: {
		title: "Interests",
		type: "line",
		skills: [
			{
				title: "Technology",
				ariaValue: "100",
				value: "1",
				text: "software/hardware",
			},
			{
				title: "Science",
				ariaValue: "95",
				value: "0.95",
				text: "social/physics/biology",
			},
			{
				title: "Culinary",
				ariaValue: "95",
				value: "0.95",
				text: "cooking/tasting",
			},
			{
				title: "Travelling",
				ariaValue: "90",
				value: "0.9",
				text: "Asia/Mediterranean",
			},
			{
				title: "Nature",
				ariaValue: "90",
				value: "0.9",
				text: "quietness/relaxation!",
			},
			{
				title: "Culture",
				ariaValue: "85",
				value: "0.85",
				text: "music/books/plays",
			},
			{
				title: "Sports",
				ariaValue: "80",
				value: "0.8",
				text: "running/climbing",
			},
		],
	},
};

/** @type {Experience} */
export const experience = {
	title: "Experience",
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
			hidden: true,
			function:
				'Front-end developer - <span class="nowrap">UX designer</span>',
			organization: "Your company?",
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-your-company.md",
			),
			expander: {
				id: "timeline-me-expander",
				text: "why me?",
				textAlt: "closing this would ruin my day",
				content: markdownFileToHtml(
					"src/data/content-en/experience-timeline-your-company-expander.md",
				),
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
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-priva.md",
			),
		},
		{
			from: {
				month: "May",
				year: 2013,
			},
			to: {
				month: "Jun",
				year: 2017,
			},
			function: "Front-end developer",
			organization: "Just Walk",
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-just-walk.md",
			),
			expander: {
				id: "timeline-justwalk-expander",
				text: "detailed explanation",
				textAlt: "less is more..",
				content: markdownFileToHtml(
					"src/data/content-en/experience-timeline-just-walk-expander.md",
				),
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
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-solid-core-web-solutions.md",
			),
		},
		{
			from: {
				month: "Sep",
				year: 2010,
			},
			to: {
				month: "May",
				year: 2011,
			},
			function: "Partner - Developer",
			organization: "Triangle Productions",
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-triangle-productions.md",
			),
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
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-bluewater-energy-services-designer.md",
			),
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
			content: markdownFileToHtml(
				"src/data/content-en/experience-timeline-bluewater-energy-services-controller.md",
			),
		},
	],
};

/** @type {Education} */
export const education = {
	title: "Education",
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
			function: "Interactive Media",
			organization: "Amsterdam University of Applied Sciences",
			content: markdownFileToHtml(
				"src/data/content-en/education-timeline.md",
			),
			expander: {
				id: "timeline-iam-expander",
				text: "more information",
				textAlt: "less is more..",
				content: markdownFileToHtml(
					"src/data/content-en/education-timeline-expander.md",
				),
			},
		},
	],
};

/** @type {References} */
export const references = {
	title: "References",
	reference: [
		{
			image: "marius",
			alt: "reference by",
			author: "Marius van der Kooy",
			function: "Manager",
			organization: "Just Walk",
			content: markdownFileToHtml(
				"src/data/content-en/references-reference-just-walk-marius.md",
			),
			expander: {
				id: "reference-marius-expander",
				text: "read more",
				textAlt: "less is more..",
				content: markdownFileToHtml(
					"src/data/content-en/references-reference-just-walk-marius-expander.md",
				),
			},
		},
		{
			image: "bart",
			author: "Bart Lageweg",
			alt: "reference by",
			function: "Owner",
			organization: "Bizway",
			content: markdownFileToHtml(
				"src/data/content-en/references-reference-bizway-bart.md",
			),
		},
		{
			image: "danny",
			author: "Danny Visser",
			alt: "reference by",
			function: "Owner",
			organization: "Just Walk",
			content: markdownFileToHtml(
				"src/data/content-en/references-reference-just-walk-danny.md",
			),
		},
	],
};

/** @type {SkillSection} */
const programming = {
	title: "Languages",
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
			text: "proficient",
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

/** @type {SkillSection} */
const techniques = {
	title: "Techniques",
	type: "line",
	skills: [
		{
			title: "Compatibility",
			ariaValue: "90",
			value: "0.9",
			text: "browser/platform/device",
		},
		{
			title: "Principles",
			ariaValue: "90",
			value: "0.9",
			text: "YAGNI/DRY/KISS",
		},
		{
			title: "Automation",
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
			title: "Paradigms",
			ariaValue: "75",
			value: "0.75",
			text: "object/functional/procedural",
		},
		{
			title: "Security",
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

/** @type {SkillSection} */
const contents = {
	title: "Structure",
	type: "radial",
	skills: [
		{
			title: "Semantics",
			ariaValue: "90",
			value: "0.9",
			text: "proficient",
		},
		{
			title: "Microdata",
			ariaValue: "90",
			value: "0.9",
			text: "proficient",
		},
		{
			title: "JSON/XML",
			ariaValue: "85",
			value: "0.85",
			text: "proficient",
		},
		{
			title: "Templating",
			ariaValue: "75",
			value: "0.75",
			text: "competent",
		},
		{
			title: "Accessibility",
			ariaValue: "70",
			value: "0.7",
			text: "competent",
		},
	],
};

/** @type {SkillSection} */
const visualisation = {
	title: "Visualisation",
	type: "radial",
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
			title: "CSS Animation",
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

/** @type {SkillSection} */
const interaction = {
	title: "Interaction",
	type: "radial",
	skills: [
		{
			title: "ES5",
			ariaValue: "85",
			value: "0.85",
			text: "proficient",
		},
		{
			title: "XHR/AJAX",
			ariaValue: "85",
			value: "0.85",
			text: "proficient",
		},
		{
			title: "jQuery",
			ariaValue: "85",
			value: "0.85",
			text: "proficient",
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

/** @type {SkillSection} */
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

/** @type {SkillSection} */
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

/** @type {SkillSection} */
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

/** @type {SkillSection} */
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

/** @type {Knowledge} */
export const knowledge = {
	title: "Knowledge",
	content: markdownFileToHtml("src/data/content-en/knowledge.md"),
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

/** @type {SkillSection} */
const hexaco = {
	title: "HEXACO Factors",
	type: "line",
	skills: [
		{
			title: "HONESTY-HUMILITY",
			ariaValue: 90,
			value: 0.9,
			text: "fair, modest",
			textAlt: "self-advancing",
		}, // 6.40
		{
			title: "EMOTIONALITY",
			ariaValue: 86,
			value: 0.86,
			text: "emotionally attuned",
			textAlt: "stoic, steady",
		}, // 6.14
		{
			title: "EXTRAVERSION",
			ariaValue: 80,
			value: 0.8,
			text: "expressive, outgoing",
			textAlt: "quiet, reserved",
		}, // 5.79
		{
			title: "AGREEABLENESS",
			ariaValue: 67,
			value: 0.67,
			text: "cooperative, flexible",
			textAlt: "forthright, firm",
		}, // 5.02
		{
			title: "CONSCIENTIOUSNESS",
			ariaValue: 87,
			value: 0.87,
			text: "planful, reliable",
			textAlt: "flexible, spontaneous",
		}, // 6.21
		{
			title: "OPENNESS",
			ariaValue: 85,
			value: 0.85,
			text: "curious, creative",
			textAlt: "traditional, steady",
		}, // 6.10
		{
			title: "(interstitial) Altruism",
			ariaValue: 91,
			value: 0.91,
			text: "generous",
			textAlt: "self-protective",
		}, // 6.44
	],
};

/** @type {SkillSection} */
const honestyHumility = {
	title: "Honesty-Humility",
	type: "line",
	skills: [
		{
			title: "Sincerity",
			ariaValue: 89,
			value: 0.89,
			text: "plain-speaking",
			textAlt: "diplomatic charm",
		}, // 6.36
		{
			title: "Fairness",
			ariaValue: 87,
			value: 0.87,
			text: "even-handed",
			textAlt: "competitive",
		}, // 6.22
		{
			title: "Greed Avoidance",
			ariaValue: 90,
			value: 0.9,
			text: "low status focus",
			textAlt: "status focus",
		}, // 6.39
		{
			title: "Modesty",
			ariaValue: 94,
			value: 0.94,
			text: "low-key",
			textAlt: "self-promotion",
		}, // 6.63
	],
};

/** @type {SkillSection} */
const emotionality = {
	title: "Emotionality",
	type: "line",
	skills: [
		{
			title: "Dependence",
			ariaValue: 92,
			value: 0.92,
			text: "support-seeking",
			textAlt: "self-reliant",
		}, // 6.49
		{
			title: "Anxiety",
			ariaValue: 86,
			value: 0.86,
			text: "vigilant",
			textAlt: "calm under pressure",
		}, // 6.16
		{
			title: "Sentimentality",
			ariaValue: 79,
			value: 0.79,
			text: "tender-hearted",
			textAlt: "reserved",
		}, // 5.73
		{
			title: "Fearfulness",
			ariaValue: 61,
			value: 0.61,
			text: "risk-cautious",
			textAlt: "risk-tolerant",
		}, // 4.68
	],
};

/** @type {SkillSection} */
const extraversion = {
	title: "Extraversion",
	type: "line",
	skills: [
		{
			title: "Social Self-esteem",
			ariaValue: 71,
			value: 0.71,
			text: "self-assured",
			textAlt: "self-effacing",
		}, // 5.27
		{
			title: "Social Boldness",
			ariaValue: 81,
			value: 0.81,
			text: "bold",
			textAlt: "observant",
		}, // 5.84
		{
			title: "Sociability",
			ariaValue: 71,
			value: 0.71,
			text: "outgoing",
			textAlt: "private focus",
		}, // 5.23
		{
			title: "Liveliness",
			ariaValue: 83,
			value: 0.83,
			text: "energetic",
			textAlt: "steady",
		}, // 5.96
	],
};

/** @type {SkillSection} */
const agreeableness = {
	title: "Agreeableness",
	type: "line",
	skills: [
		{
			title: "Forgiveness",
			ariaValue: 77,
			value: 0.77,
			text: "forgiving",
			textAlt: "accountability",
		}, // 5.59
		{
			title: "Gentleness",
			ariaValue: 62,
			value: 0.62,
			text: "gentle",
			textAlt: "candid",
		}, // 4.70
		{
			title: "Flexibility",
			ariaValue: 54,
			value: 0.54,
			text: "flexible",
			textAlt: "resolute",
		}, // 4.26
		{
			title: "Patience",
			ariaValue: 73,
			value: 0.73,
			text: "patient",
			textAlt: "urgent",
		}, // 5.36
	],
};

/** @type {SkillSection} */
const conscientiousness = {
	title: "Conscientiousness",
	type: "line",
	skills: [
		{
			title: "Organization",
			ariaValue: 76,
			value: 0.76,
			text: "organized",
			textAlt: "adaptive",
		}, // 5.54
		{
			title: "Diligence",
			ariaValue: 96,
			value: 0.96,
			text: "persistent",
			textAlt: "balanced pace",
		}, // 6.78
		{
			title: "Perfectionism",
			ariaValue: 88,
			value: 0.88,
			text: "detail care",
			textAlt: "big picture",
		}, // 6.31
		{
			title: "Prudence",
			ariaValue: 68,
			value: 0.68,
			text: "deliberate",
			textAlt: "adventurous",
		}, // 5.09
	],
};

/** @type {SkillSection} */
const openness = {
	title: "Openness",
	type: "line",
	skills: [
		{
			title: "Aesthetic Appreciation",
			ariaValue: 67,
			value: 0.67,
			text: "aesthetic focus",
			textAlt: "utilitarian",
		}, // 5.02
		{
			title: "Inquisitiveness",
			ariaValue: 92,
			value: 0.92,
			text: "curious",
			textAlt: "efficient",
		}, // 6.53
		{
			title: "Creativity",
			ariaValue: 80,
			value: 0.8,
			text: "original",
			textAlt: "reliable",
		}, // 5.81
		{
			title: "Unconventionality",
			ariaValue: 82,
			value: 0.82,
			text: "unconventional",
			textAlt: "conventional",
		}, // 5.90
	],
};

/** @type {SkillSection} */
const altruism = {
	title: "Altruism",
	type: "line",
	skills: [
		{
			title: "Altruism",
			ariaValue: 91,
			value: 0.91,
			text: "giving",
			textAlt: "self-protective",
		}, // 6.44
	],
};

/** @type {Personality} */
export const personality = {
	title: "Personality",
	content: markdownFileToHtml("src/data/content-en/personality.md"),
	factors: hexaco,
	facets: [
		honestyHumility,
		emotionality,
		extraversion,
		agreeableness,
		conscientiousness,
		openness,
		altruism,
	],
};

/** @type {Content} */
export const contentEn = {
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

export default contentEn;
