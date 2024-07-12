import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";
import React from "react";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${recursive.className} no-scrollbar`}>
				<Navbar />
				<main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-dark">
					<div className="flex flex-col flex-1 h-full">
						<Provider>{children}</Provider>
					</div>
					<Footer />
				</main>
				<Toaster />
			</body>
		</html>
	);
}
