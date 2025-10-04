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
		text: "LinkedIn Profile",
		ref: "https://www.linkedin.com/in/pvdsteen",
		slug: "linkedin",
		icon: "linkedin",
		visible: true,
		target: "_blank",
	},
	{
		text: "GitHub Profile",
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
			triggerText: "read more",
			triggerTextAlt: "less is more",
			triggerOnce: false,
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
				def: '<a href="mailto:pvdsteen@gmail.com">pvdsteen@gmail.com</a>',
			},
			{
				term: "Phone",
				def: "+31 6 104 25 975",
			},
			{
				term: "Skype",
				def: "rockfromtherock",
				id: "skype",
				class: "is-optional",
			},
			{
				term: "License",
				def: "Car",
			},
			{
				term: "Mood",
				def: "Zealous",
				id: "mood",
				class: "is-optional",
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
			company: "Your company?",
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
			company: "Priva",
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
			company: "Just Walk",
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
			company: "Solid Core Web Solutions",
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
			company: "Triangle Productions",
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
			company: "Bluewater Energy Services",
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
			company: "Bluewater Energy Services",
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
			institution: "Amsterdam University of Applied Sciences",
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
			image: "avatar-marius",
			alt: "reference by",
			author: "Marius van der Kooy",
			function: "Manager",
			company: "Just Walk",
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
			image: "avatar-bart",
			author: "Bart Lageweg",
			alt: "reference by",
			function: "Owner",
			company: "Bizway",
			content: markdownFileToHtml(
				"src/data/content-en/references-reference-bizway-bart.md",
			),
		},
		{
			image: "avatar-danny",
			author: "Danny Visser",
			alt: "reference by",
			function: "Owner",
			company: "Just Walk",
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
	type: "chart",
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
	type: "chart",
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
