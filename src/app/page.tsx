import Image from "next/image";
import { Hero } from "@/components/component/hero";
import { ActivitiesCarousel } from "@/components/component/activities-carousel";
import { Values } from "@/components/component/values";
import { GetInvolvedCards } from "@/components/component/get-involved-cards";
import { Partnerships } from "@/components/component/partnerships";

export default function Home() {
	return (
		<main>
			<Hero />
			<ActivitiesCarousel />
			<Values />
			<GetInvolvedCards />
			<Partnerships />
		</main>
	);
}
