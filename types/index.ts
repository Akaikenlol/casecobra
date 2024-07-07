import { CaseColor } from "@prisma/client";

export const PHONES = [
	"/assets/testimonials/1.jpg",
	"/assets/testimonials/2.jpg",
	"/assets/testimonials/3.jpg",
	"/assets/testimonials/4.jpg",
	"/assets/testimonials/5.jpg",
	"/assets/testimonials/6.jpg",
];

export const POSSIBLE_ANIMATION_DELAYS = [
	"0.05s",
	"0.1s",
	"0.2s",
	"0.3s",
	"0.4s",
	"0.5s",
];

export const userImages = [
	"/assets/users/user-1.png",
	"/assets/users/user-2.png",
	"/assets/users/user-3.png",
	"/assets/users/user-4.jpg",
];

export const qualityInfo = [
	"Scratch and fingerprint resistant coating",
	"Wireless charging compatible",
	"High-quality silicone material",
	"5 year print warranty",
];

export const materialInfo = [
	'High-quality "soft touch" silicone',
	"Scratch and fingerprint resistant coating",
];

export const footerLinks = [
	{ title: "Terms", url: "/terms" },
	{ title: "Privacy Policy", url: "/privacy-policy" },
	{ title: "Cookies Policy", url: "/cookies-policy" },
];

export const STEPS = [
	// {
	// 	name: "ステップー１: 画像を追加する",
	// 	description: "ケースの画像を選択してください",
	// 	url: "/upload",
	// },
	// {
	// 	name: "ステップー２: デザインをカスタマイズ",
	// 	description: "ケースを自分のものにする",
	// 	url: "/design",
	// },
	// {
	// 	name: "ステップー３: まとめ",
	// 	description: "最終デザインを確認する",
	// 	url: "/preview",
	// },
	{
		name: "Step 1: Add Image",
		description: "Select an image for your case",
		url: "/upload",
	},
	{
		name: "Step 2: Customize Design",
		description: "Make the case your own",
		url: "/design",
	},
	{
		name: "Step 3: Summary",
		description: "Review your final design",
		url: "/preview",
	},
];

// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-slate-300 border-slate-300

export const COLORS = [
	{ label: "Black", value: "black", tw: "zinc-900" },
	{ label: "Slate", value: "white", tw: "slate-500" },
	{ label: "Blue", value: "blue", tw: "blue-950" },
	{ label: "Red", value: "red", tw: "rose-950" },
] as const;

export const MODELS = {
	name: "model",
	options: [
		{ label: "iPhone X", value: "iphonex" },
		{ label: "iPhone 11", value: "iphone11" },
		{ label: "iPhone 12", value: "iphone12" },
		{ label: "iPhone 13", value: "iphone13" },
		{ label: "iPhone 14", value: "iphone14" },
		{ label: "iPhone 15", value: "iphone15" },
	],
} as const;

export const PRODUCT_PRICES = {
	material: {
		silicone: 0,
		polycarbonate: 5_00,
	},
	finish: {
		smooth: 0,
		textured: 3_00,
	},
} as const;

export const MATERIAL = {
	name: "material",
	options: [
		{
			label: "Silicone",
			value: "silicone",
			description: undefined,
			price: PRODUCT_PRICES.material.silicone,
		},
		{
			label: "Soft Polycarbonate",
			value: "polycarbonate",
			description: "Scratch-resistant coating",
			price: PRODUCT_PRICES.material.polycarbonate,
		},
	],
} as const;

export const FINISHES = {
	name: "finish",
	options: [
		{
			label: "Smooth Finish",
			value: "smooth",
			description: undefined,
			price: PRODUCT_PRICES.finish.smooth,
		},
		{
			label: "Texture Finish",
			value: "textured",
			description: "Soft grippy texture",
			price: PRODUCT_PRICES.finish.textured,
		},
	],
} as const;

export const BASE_PRICE = 14_00;
