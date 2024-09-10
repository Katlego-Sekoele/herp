import { createClient, ContentfulClientApi, EntrySys, OrderFilterPaths, EntryCollection, EntrySkeletonType } from "contentful";

export class CMSClient<ContentType> {
	private client: ContentfulClientApi<undefined>;
	static CONTENT_TYPE_IDS = {
		HOME: "homePage",
	} as const;

	constructor() {
		const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
		const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

		if (!accessToken || !spaceId) {
			throw new Error('Contentful access token or space ID is missing');
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

	async getLatestEntries<ContentType>(contentType: keyof typeof CMSClient.CONTENT_TYPE_IDS, limit: number = 10, order: (OrderFilterPaths<EntrySys, "sys"> | "sys.contentType.sys.id" | "-sys.contentType.sys.id" | `fields.${string}` | `-fields.${string}` | `fields.${string}.sys.id` | `-fields.${string}.sys.id`)[] = ['-sys.createdAt']): Promise<homePageModel | homePageModel[]> {
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

	private transformData(entries: EntryCollection<EntrySkeletonType, undefined, string>, contentType: keyof typeof CMSClient.CONTENT_TYPE_IDS): homePageModel[] {
		if (contentType as string === CMSClient.CONTENT_TYPE_IDS.HOME as string) {
			const data = entries.items.map((item) => {
				return {
					heroTitle: item.fields.heroTitle,
					heroDescription: item.fields.heroDescription,
					buttonText: item.fields.buttonText,
					buttonLink: item.fields.buttonLink,
					heroImage: item.fields.heroImage?.fields?.file?.url || ""
				} as homePageModel;
			});
			return data;
		}
	}

	async getEntryByContentType<ContentType>(contentType: keyof typeof CMSClient.CONTENT_TYPE_IDS, limit: number = 10, order: (OrderFilterPaths<EntrySys, "sys"> | "sys.contentType.sys.id" | "-sys.contentType.sys.id" | `fields.${string}` | `-fields.${string}` | `fields.${string}.sys.id` | `-fields.${string}.sys.id`)[] = ['sys.createdAt']) {
		const entries = await this.client.getEntries({
			content_type: CMSClient.CONTENT_TYPE_IDS[contentType],
			limit,
			order,
		});
		return entries;
	}
}

export interface homePageModel {
	heroTitle: string;
	heroDescription: string;
	buttonText: string;
	buttonLink: string;
	heroImage: string;
}

export interface content {
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
