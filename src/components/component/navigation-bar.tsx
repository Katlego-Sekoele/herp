"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5DdvHG0Syeg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export function NavigationBar() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between h-32 px-4 md:px-6 bg-background border-b">
			<Link href="/" className="flex items-center gap-2" prefetch={true}>
				<Image
					src="/logo.png"
					alt="Acme Community"
					width={256}
					height={256}
				/>
			</Link>
			<nav className="hidden md:flex items-center gap-6">
				<Link
					href="/"
					className="text-xl font-medium text-muted-foreground hover:text-foreground"
					prefetch={true}
				>
					Home
				</Link>
				<Link
					href="/communities"
					className="text-lg font-medium text-muted-foreground hover:text-foreground"
					prefetch={true}
				>
					Our Communities
				</Link>
				<Link
					href="/about-us"
					className="text-lg font-medium text-muted-foreground hover:text-foreground"
					prefetch={true}
				>
					About Us
				</Link>
				<Link
					href="/get-involved"
					className="text-lg font-medium text-muted-foreground hover:text-foreground"
					prefetch={true}
				>
					Get Involved
				</Link>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<MenuIcon className="w-6 h-6" />
						<span className="sr-only">Toggle navigation</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="sm:max-w-xs">
					<nav className="grid gap-4 p-4 text-lg font-large">
						<Link
							href="/"
							className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
							prefetch={true}
						>
							<HomeIcon className="w-5 h-5" />
							Home
						</Link>
						<Link
							href="/communities"
							className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
							prefetch={true}
						>
							<UsersIcon className="w-5 h-5" />
							Our Communities
						</Link>
						<Link
							href="/about-us"
							className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
							prefetch={true}
						>
							<InfoIcon className="w-5 h-5" />
							About Us
						</Link>
						<Link
							href="/get-involved"
							className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
							prefetch={true}
						>
							<HandIcon className="w-5 h-5" />
							Get Involved
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	);
}

function HandIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
			<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
			<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
			<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
		</svg>
	);
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</svg>
	);
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
