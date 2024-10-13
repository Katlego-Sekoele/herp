import { CONTENT_TYPE_IDS, HomePageModel } from "./cms";

export async function getHomePageData() {
	const apiUrl = new URL("/api/cms", window.location.origin);
	const params = new URLSearchParams({
		contentTypeId: CONTENT_TYPE_IDS.HOME,
		limit: "1",
	});
	apiUrl.search = params.toString();

	const response = await fetch(apiUrl.toString());
	if (!response.ok) {
		throw new Error("Network response was not ok");
	} else {
		return response.json();
	}
}

export async function getDataFromCMS(contentTypeId: string, limit: number = 1) {
	const apiUrl = new URL("/api/cms", window.location.origin);
	const params = new URLSearchParams({
		contentTypeId,
		limit: limit.toString(),
	});
	apiUrl.search = params.toString();

	const response = await fetch(apiUrl.toString());
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	switch (contentTypeId) {
		case CONTENT_TYPE_IDS.HOME:
			return response.json() as Promise<HomePageModel>;
		default:
			throw new Error(`Unsupported content type: ${contentTypeId}`);
	}
}
