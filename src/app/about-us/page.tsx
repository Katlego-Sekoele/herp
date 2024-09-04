import { AboutUs } from "@/components/component/about-us";
import React, { ReactNode } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
	return (
		<div>
			<AboutUs />
		</div>
	);
};

export default Page;
