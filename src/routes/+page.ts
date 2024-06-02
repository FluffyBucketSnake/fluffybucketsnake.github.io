import type { IPostMetadata } from '$lib/interfaces/posts';

export async function load() {
	const blogPosts = new Array<IPostMetadata>(4).fill({
		slug: 'a',
		link: '/post/a',
		title: 'Hello Again',
		date: new Date('2022-09-11'),
		description:
			"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
	});

	return { blogPosts };
}
