import { getPosts } from '$lib/data/posts';

export async function load() {
	const blogPosts = await getPosts();

	return { blogPosts };
}
