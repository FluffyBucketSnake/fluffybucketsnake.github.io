import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md', '.mdx'] })],
	kit: {
		adapter: adapter({
			pages: 'build'
		})
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	}
	// compilerOptions: {
	// 	runes: true
	// }
};

export default config;
