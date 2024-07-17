import { Recursive } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";
import "../globals.css";
import { constructMetaData } from "@/lib/constructMetaData";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetaData();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={recursive.className}>
				<Navbar />
				<main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
					<div className="flex-1 flex flex-col h-full">
						<Provider>{children}</Provider>
					</div>
					<Footer />
				</main>
				<Toaster />
			</body>
		</html>
	);
}
