import { NextResponse } from 'next/server';
import { CMSClient, HomePageModel } from "@/lib/cms";
import { CONTENT_TYPE_IDS } from "@/lib/cms";
import { EntrySys, OrderFilterPaths } from "contentful";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const contentTypeId = searchParams.get("contentTypeId");
	const limit = searchParams.get("limit") || "1";
	const order = searchParams.get("order") || ["-sys.createdAt"];

	if (!contentTypeId) {
		return NextResponse.json(
			{ error: "Content type ID is required" },
			{ status: 400 }
		);
	}

	const cms = new CMSClient<HomePageModel>();

	try {
		const data = await cms.getLatestEntries(
			contentTypeId as keyof typeof CONTENT_TYPE_IDS,
			Number(limit),
			order as (
				| OrderFilterPaths<EntrySys, "sys">
				| "sys.contentType.sys.id"
				| "-sys.contentType.sys.id"
				| `fields.${string}`
				| `-fields.${string}`
				| `fields.${string}.sys.id`
				| `-fields.${string}.sys.id`
			)[]
		);
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch data" },
			{ status: 500 }
		);
	}
}