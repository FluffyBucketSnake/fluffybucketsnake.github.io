import type { IPostMetadata } from '$lib/types/posts';

export async function load() {
	const blogPosts = new Array<IPostMetadata>(4).fill({} as IPostMetadata).map((_, i) => ({
		slug: `${i}`,
		link: '/post/a',
		title: 'Hello Again',
		date: new Date('2022-09-11'),
		description:
			"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
	}));

	return { blogPosts };
}
