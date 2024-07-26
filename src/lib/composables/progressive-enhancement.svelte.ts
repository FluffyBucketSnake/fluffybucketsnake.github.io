import { getContext, setContext } from 'svelte';

const contextKey = Symbol();

export interface Context {
	get hasJs(): boolean;
}

export function useProgressiveEnhancement() {
	return getContext<Context>(contextKey);
}

export function useProgressiveEnhancementTrigger() {
	let hasJs = $state(false);
	$effect(() => {
		hasJs = true;
	});
	setContext<Context>(contextKey, {
		get hasJs() {
			return hasJs;
		}
	});
}
