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

export const footerLinks = [
	{ title: "Terms", url: "/terms" },
	{ title: "Privacy Policy", url: "/privacy-policy" },
	{ title: "Cookies Policy", url: "/cookies-policy" },
];

export const STEPS = [
	{
		name: "ステップー１: 画像を追加する",
		description: "ケースの画像を選択してください",
		url: "/upload",
	},
	{
		name: "ステップー２: デザインをカスタマイズ",
		description: "ケースを自分のものにする",
		url: "/design",
	},
	{
		name: "ステップー３: まとめ",
		description: "最終デザインを確認する",
		url: "/preview",
	},
];

export const COLORS = [
	{ label: "Black", value: "#18181B", tw: "zinc-900" },
	{ label: "Slate", value: "#CBD5E1", tw: "slate-500" },
	{ label: "Blue", value: "#172554", tw: "blue-950" },
	{ label: "Rose", value: "#4C0519", tw: "rose-950" },
] as const;

export const MODELS = {
	name: "models",
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
