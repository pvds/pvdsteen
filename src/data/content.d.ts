// Auto-generated types for content-en.js (DRY, camelCase keys)

// ---------- Reusable primitives ----------
export type Month = string | null;
export type Year = string | number;

// ---------- Generic helpers ----------
export type Expander = {
	id: string;
	content: string;
	text?: string;
	textAlt?: string;
};

export type DatePoint = {
	month: Month;
	year: Year;
};

export type DefinitionItem = {
	term: string;
	def: string;
	id?: string;
	class?: string;
};

export type SkillItem = {
	title: string;
	ariaValue?: string | number;
	value?: string | number;
	text?: string;
	textAlt?: string;
};

export type SkillsType = "line" | "radial" | "dots";

export type SkillSection = {
	title: string;
	type: SkillsType;
	skills: SkillItem[];
};

// ---------- Top-level sections ----------
export type Meta = {
	language: string;
	title: string;
	description: string;
	author: string;
	location: string;
	region: string;
	slug?: string;
};

export type NavItem = {
	title: string;
	id: string;
};

export type Card = {
	name: string;
	profession: {
		first: string;
		second: string;
	};
};

export type LinkItem = {
	text: string;
	ref: string;
	slug: string;
	icon: string;
	visible: boolean;
	target?: "_blank" | "_self" | string;
	download?: boolean;
};

export type About = {
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
};

export type TimelineItem = {
	from: DatePoint;
	to: DatePoint;
	hidden?: boolean;
	function: string;
	organization: string;
	content: string;
	expander?: Expander;
};

export type Experience = {
	title: string;
	timeline: TimelineItem[];
};

export type Education = {
	title: string;
	timeline: TimelineItem[];
};

export type ReferenceItem = {
	image: string;
	alt: string;
	author: string;
	function: string;
	organization: string;
	content: string;
	expander?: Expander;
};

export type References = {
	title: string;
	reference: ReferenceItem[];
};

export type Knowledge = {
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
};

export type Content = {
	meta: Meta;
	nav: NavItem[];
	card: Card;
	links: LinkItem[];
	about: About;
	experience: Experience;
	education: Education;
	references: References;
	knowledge: Knowledge;
};
