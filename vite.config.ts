import { exec as rawExec } from 'node:child_process';
import { promisify } from 'node:util';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import icons from 'unplugin-icons/vite';

const exec = promisify(rawExec);

export default defineConfig({
	plugins: [
		sveltekit(),
		icons({
			compiler: 'svelte',
			customCollections: {
				pixelent: async (iconName: string) => {
					const isColored = iconName.endsWith('colored');
					const inputFilepath = `./icons/pixelent/${iconName}.png`;
					const { stdout } = await exec(
						`pixel2svg --strip-namespaces --strip-extra-attrs --squaresize 1 --color-format rgb-hex -O - ${inputFilepath}`
					);
					return isColored ? stdout : stdout.replaceAll('fill="#000000"', 'fill="currentcolor"');
				}
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
