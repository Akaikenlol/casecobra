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
