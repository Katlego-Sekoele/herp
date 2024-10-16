import { createClient, ContentfulClientApi, EntrySys, OrderFilterPaths, EntryCollection, EntrySkeletonType, Asset } from "contentful";

export const CONTENT_TYPE_IDS = {
	HOME: "homePage",
} as const;

export class CMSClient<ContentType> {
	private readonly client: ContentfulClientApi<undefined>;
	static readonly CONTENT_TYPE_IDS = CONTENT_TYPE_IDS;

	constructor() {
		const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
		const spaceId = process.env.CONTENTFUL_SPACE_ID;

		if (!accessToken || !spaceId) {
			throw new Error("Contentful access token or space ID is missing");
		}

		this.client = createClient({
			accessToken,
			space: spaceId,
		});
	}

	async getAllEntries() {
		const entries = await this.client.getEntries();
		return entries;
	}

	async getLatestEntries<ContentType>(
		contentType: keyof typeof CMSClient.CONTENT_TYPE_IDS,
		limit: number = 10,
		order: (
			| OrderFilterPaths<EntrySys, "sys">
			| "sys.contentType.sys.id"
			| "-sys.contentType.sys.id"
			| `fields.${string}`
			| `-fields.${string}`
			| `fields.${string}.sys.id`
			| `-fields.${string}.sys.id`
		)[] = ["-sys.createdAt"]
	): Promise<HomePageModel | HomePageModel[]> {
		const contentTypeId = CMSClient.CONTENT_TYPE_IDS[contentType];
		const entries = await this.client.getEntries({
			content_type: contentTypeId,
			limit,
			order,
		});

		const data = this.transformData(entries, contentType);

		if (limit === 1) {
			return data[0];
		}
		return data;
	}

	private transformData(
		entries: EntryCollection<EntrySkeletonType, undefined, string>,
		contentType: keyof typeof CMSClient.CONTENT_TYPE_IDS
	): HomePageModel[] {
		switch (contentType) {
			case CMSClient.CONTENT_TYPE_IDS
				.HOME as keyof typeof CMSClient.CONTENT_TYPE_IDS:
				let data: HomePageModel[];
				data = entries.items.map((item) => {
					return {
						heroTitle: item.fields.heroTitle,
						heroDescription: item.fields.heroDescription,
						buttonText: item.fields.buttonText as string,
						buttonLink: item.fields.buttonLink as string,
						heroImage:
							(item.fields.heroImage as Asset)?.fields?.file
								?.url || "",
					} as HomePageModel;
				});
				return data;
			default:
				throw new Error(`Unsupported content type: ${contentType}`);
		}
	}
}

export interface HomePageModel {
	heroTitle: string;
	heroDescription: string;
	buttonText: string;
	buttonLink: string;
	heroImage: string;
}

export interface Content {
	home: {
		hero: {
			title: string;
			description?: string;
			button?: string;
			buttonLink?: string;
		};
		communities: {
			title: string;
			description: string;
			slides: {
				title: string;
				description: string;
				image: string;
				buttonText: string;
				buttonLink: string;
			}[];
		};
		story: {
			title: string;
			description: string;
			values: {
				title: string;
				description: string;
				image: string;
			}[];
		};
		getInvolved: {
			title: string;
			description: string;
			oppotunities: {
				title: string;
				description: string;
				buttonText: string;
				buttonLink: string;
			}[];
		};
		partners: {
			title: string;
			description: string;
			cards: {
				name: string;
				description: string;
				image: string;
			}[];
		};
	};
	community: {
		name: string;
		description: string;
		history: {
			title: string;
			description: string;
			date: string;
		}[];
		legends: {
			name: string;
			description: string;
		}[];
		images: string[];
	};
}
