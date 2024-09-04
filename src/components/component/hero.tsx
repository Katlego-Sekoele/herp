"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/LrES2IZeJb0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Crimson_Text } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

crimson_text({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import React from "react";

export type HeroContent = {
	description: string;
	heading: string;
} | null;

export function Hero() {
	// const [content, setContent] = React.useState<HeroContent>(null);

	// React.useEffect(() => {
	// 	fetch(
	// 		`https://cdn.contentful.com/spaces/${"89u8m6b2cvkb"}/environments/${"master"}/entries/${"7aDNi2pUgBoqQIu5yVPzZD"}?access_token=${"Z-skW7p2XrXIGyVxNVUKWkvF10kiG36mCV0YBCLuEao"}`,
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				Authorization:
	// 					"Bearer Z-skW7p2XrXIGyVxNVUKWkvF10kiG36mCV0YBCLuEao",
	// 			},
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setContent(data.fields as HeroContent);
	// 		});
	// }, []);

	return (
		<section
			className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url('/hero-background.jpg')` }}
		>
			<div className="absolute inset-0 bg-black/50 z-0" />
			<div className="relative z-10 text-center max-w-3xl px-6">
				<h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
					Empowering Communities, Transforming Lives
				</h1>
				<p className="text-lg sm:text-xl text-white mb-8">
					Our non-profit organization is dedicated to making a lasting
					impact in the lives of those in need. Join us in our mission
					to create a more equitable and compassionate world.
				</p>
				<Link
					href="#GetInvolved"
					className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Get Involved
				</Link>
			</div>
		</section>
	);
}
