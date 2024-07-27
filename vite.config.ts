import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		icons({
			compiler: 'svelte',
			customCollections: {
				pixelent: FileSystemIconLoader('./icons/pixelent', (svg) =>
					svg.replaceAll('fill="#000000"', 'fill="currentcolor"')
				)
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: [`${searchForWorkspaceRoot(process.cwd())}/posts`]
		}
	}
});
