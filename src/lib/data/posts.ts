import { isNotNullish } from '$lib/utils/type-predicates';

const EXTENSION_REGEX = /\.(?:md|mdx)$/;

export type UrlPath = string;
export type PostSlug = string;

export interface PostMetadata {
	slug: PostSlug;
	path: UrlPath;
	title: string;
	description: string;
	preview?: UrlPath;
	draft?: boolean;
	tags: string[];
	date: Date;
	lastmod?: Date;
	next?: PostSlug;
	previous?: PostSlug;
}

interface PostFrontface {
	title: string;
	description: string;
	preview?: string;
	draft?: string;
	tags: string;
	date?: string;
	lastmod?: string;
	next?: string;
	previous?: string;
}

export async function getPosts(): Promise<PostMetadata[]> {
	return Object.entries(import.meta.glob('/posts/*.{md,mdx}', { eager: true }))
		.map(([path, file]) => {
			const slug = path.split('/').at(-1)!.replace(EXTENSION_REGEX, '');
			if (typeof file !== 'object' || !('metadata' in file!)) {
				return null;
			}
			const { title, description, preview, draft, tags, date, lastmod, next, previous } =
				file.metadata as PostFrontface;
			return {
				slug,
				path: `/blog/${slug}`,
				title,
				description,
				preview: preview && new URL(preview),
				draft: draft === 'true',
				tags: [tags],
				date: date && new Date(date),
				lastmod: lastmod && new Date(lastmod),
				next,
				previous
			} as PostMetadata;
		})
		.filter(isNotNullish);
}
