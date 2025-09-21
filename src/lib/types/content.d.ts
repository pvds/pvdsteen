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

// Section

export type SectionSize = "sm" | "md" | "lg";
