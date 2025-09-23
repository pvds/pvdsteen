// Auto-generated types for content-en.js (DRY, camelCase keys)

// ---------- Reusable primitives ----------
export type Month = string | null;
export type Year = string | number;

// ---------- Generic helpers ----------
export interface Expander {
	id: string;
	text?: string;
	textAlt?: string;
	content: string; // link to markdown
	triggerText?: string;
	triggerTextAlt?: string;
	triggerOnce?: boolean;
}

export interface DatePoint {
	month: Month;
	year: Year;
}

export interface DefinitionItem {
	term: string;
	def: string;
	id?: string;
	class?: string;
}

export interface SkillItem {
	title: string;
	ariaValue?: string | number;
	value?: string | number;
	text?: string;
	textAlt?: string;
}

export interface SkillSection {
	title: string;
	type: "line" | "chart" | "dots";
	skills: SkillItem[];
}

// ---------- Top-level sections ----------
export interface Meta {
	language: string;
	title: string;
	description: string;
	keywords: string;
	author: string;
	location: string;
	region: string;
	slug?: string;
}

export interface NavItem {
	title: string;
}

export interface Card {
	name: string;
	profession: {
		first: string;
		second: string;
	};
}

export interface LinkItem {
	text: string;
	ref: string;
	slug: string;
	icon: string;
	visible: boolean;
	target?: "_blank" | "_self" | string;
	download?: boolean;
}

export interface About {
	title: string;
	intro: {
		content: string;
		expander?: Expander;
	};
	personal: {
		title: string;
		definitions: DefinitionItem[];
	};
	languages: SkillSection;
	soft: SkillSection;
	interests: SkillSection;
}

export interface ExperienceTimelineItem {
	from: DatePoint;
	to: DatePoint;
	hidden?: boolean;
	function: string;
	company: string;
	content: string;
	expander?: Expander;
}

export interface Experience {
	title: string;
	timeline: ExperienceTimelineItem[];
}

export interface EducationTimelineItem {
	from: DatePoint;
	to: DatePoint;
	function: string;
	institution: string;
	content: string;
	expander?: Expander;
}

export interface Education {
	title: string;
	timeline: EducationTimelineItem[];
}

export interface ReferenceItem {
	image: string;
	alt: string;
	author: string;
	function: string;
	company: string;
	content: string;
	expander?: Expander;
}

export interface References {
	title: string;
	reference: ReferenceItem[];
}

export interface Knowledge {
	title: string;
	content: string;
	programming: SkillSection;
	techniques: SkillSection;
	contents: SkillSection;
	visualisation: SkillSection;
	interaction: SkillSection;
	development: SkillSection;
	cmsFrameworks: SkillSection;
	packageManagers: SkillSection;
	buildTools: SkillSection;
}

export interface Content {
	meta: Meta;
	nav: NavItem[];
	card: Card;
	links: LinkItem[];
	about: About;
	experience: Experience;
	education: Education;
	references: References;
	knowledge: Knowledge;
}
