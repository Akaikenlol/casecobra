import { Metadata } from "next";

export function constructMetaData({
	title = "CaseCobra - custom high-quality phone cases",
	description = "CaseCobra is a phone case store that offers custom high-quality phone cases for all popular phone models.",
	image = "/assets/thumbnail.png",
	icons = "/favicon.ico",
}: {
	title?: string;
	description?: string;
	image?: string;
	icons?: string;
} = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [{ url: image }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: "@keithken",
		},
		icons,
		metadataBase: new URL("https://casecobra-beige.vercel.app/"),
	};
}
