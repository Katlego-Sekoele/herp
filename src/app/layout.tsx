import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/component/navigation-bar";
import { Footer } from "@/components/component/footer";
import ScrollToTopButton from "@/components/ui/scroll-to-top";
import { ReactQueryClientProvider } from "@/lib/providers/react-query-provider";

const inter = Inter({ subsets: ["latin"] });
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
		<ReactQueryClientProvider>
			<html lang="en">
				<body className={inter.className}>
					<div className="flex flex-col h-screen justify-between">
						<NavigationBar />
						{children}
						{/* Stick footer to bottom of page */}
						<div className="">
							<Footer />
						</div>
					</div>
					<ScrollToTopButton />
				</body>
			</html>
		</ReactQueryClientProvider>
	);
}
