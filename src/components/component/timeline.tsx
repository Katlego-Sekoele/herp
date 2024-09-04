/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/A5J3Y7HvHl4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { JSX, SVGProps } from "react";

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

export interface TimelineItem {
	icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | null;
	title: string;
	date: Date;
	description: string;
}

export interface TimelineProps {
	items: TimelineItem[];
}

export function Timeline({ items }: Readonly<TimelineProps>) {
	return (
		<div className="w-full max-w-4xl mx-auto py-12 md:py-16">
			<div className="relative flex flex-col gap-8">
				<div className="absolute inset-0 w-px bg-muted-foreground/20 ml-4 md:ml-6" />
				<div className="grid gap-8">
					{items.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr] md:gap-6"
						>
							<div className="relative flex items-center justify-center">
								<div className="aspect-square w-12 md:w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
									{item.icon ? (
										item.icon({ className: "h-6 w-6" })
									) : (
										<CalendarDaysIcon className="h-6 w-6" />
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<div className="font-medium text-lg md:text-xl">
									{item.title}
								</div>
								<div className="text-muted-foreground text-sm md:text-base">
									{item.date.toDateString()}
								</div>
								<div className="text-muted-foreground text-sm md:text-base">
									{item.description}
								</div>
							</div>
						</div>
					))}
					{/* <div className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr] md:gap-6">
						<div className="relative flex items-center justify-center">
							<div className="aspect-square w-12 md:w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
								<CalendarDaysIcon className="h-6 w-6" />
							</div>
						</div>
						<div className="grid gap-2">
							<div className="font-medium text-lg md:text-xl">
								Hired new product manager
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								May 1
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								We're excited to welcome our new product
								manager, who will be leading the development of
								our upcoming features.
							</div>
						</div>
					</div>
					<div className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr] md:gap-6">
						<div className="relative flex items-center justify-center">
							<div className="aspect-square w-12 md:w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
								<CalendarDaysIcon className="h-6 w-6" />
							</div>
						</div>
						<div className="grid gap-2">
							<div className="font-medium text-lg md:text-xl">
								Launched new product feature
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								April 1
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								We're excited to announce the launch of our new
								product feature, which has been highly requested
								by our users.
							</div>
						</div>
					</div>
					<div className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr] md:gap-6">
						<div className="relative flex items-center justify-center">
							<div className="aspect-square w-12 md:w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
								<CalendarDaysIcon className="h-6 w-6" />
							</div>
						</div>
						<div className="grid gap-2">
							<div className="font-medium text-lg md:text-xl">
								Won industry award
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								March 15
							</div>
							<div className="text-muted-foreground text-sm md:text-base">
								We're honored to have been recognized by our
								industry peers for our innovative work.
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

function CalendarDaysIcon(
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
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
			<path d="M8 14h.01" />
			<path d="M12 14h.01" />
			<path d="M16 14h.01" />
			<path d="M8 18h.01" />
			<path d="M12 18h.01" />
			<path d="M16 18h.01" />
		</svg>
	);
}
