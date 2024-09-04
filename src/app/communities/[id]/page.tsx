import { Community } from "@/components/component/community";
import { OurCommunities } from "@/components/component/our-communities";
import React, { ReactNode } from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
	return (
		<div>
			<Community />
		</div>
	);
};

export default Page;
