// Navigation

export type NavigationItem = {
	href: string;
	label: string;
	title?: string;
	menuTitle?: string;
	target?: "_blank";
	items?: NavigationItem[];
};

// Image

export type ImageMeta = {
	placeholder: string;
	width: string;
	height: string;
	hasAlpha: boolean;
};

// ### ImageField

export type ImageField = {
	title: string;
	description: string;
	file: {
		url: string;
		details: {
			size: number;
			image: {
				width: number;
				height: number;
			};
		};
		fileName: string;
		contentType: string;
	};
};

// ### Base

export type Metadata = {
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	locale: string;
};

// ### Base

export type BaseFields = {
	title: string;
	slug: string;
	seoDescription: string;
	seoKeywords?: string;
	seoIndex: boolean;
	hidden?: boolean;
	header?: string;
	intro?: string;
	content?: string;
	sections?: SectionFields[];
	outro?: string;
};

// ### Section

export type SectionFields = {
	title: string;
	header?: string;
	content: string;
	image?: ImageField;
};

// ### Pages

export type PageFields = BaseFields & {
	menuTitle?: string;
	heroImage?: ImageField;
	children?: PageFields[];
};

export type PageEntry = {
	meta: Metadata;
	fields: PageFields;
};

// Section

export type SectionSize = "sm" | "md" | "lg";
