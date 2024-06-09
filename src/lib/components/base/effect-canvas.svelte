<script lang="ts" context="module">
	export interface Props {
		class: string;
		error?: unknown;
		renderEffect: RenderEffectFactory;
		fallback?: Snippet;
	}
</script>

<script lang="ts">
	import type { RenderEffectFactory } from '$lib/effects/base';
	import type { Snippet } from 'svelte';

	let { error = $bindable(), renderEffect, fallback, ...attrs }: Props = $props();

	let effectState: 'idle' | 'playing' | 'error' = $state('idle');
	let canvas: HTMLCanvasElement | undefined = $state();

	export const play = () => {
		effectState = 'playing';
	};

	$effect(() => {
		if (canvas == null || effectState != 'playing') {
			return;
		}
		try {
			const instance = renderEffect(canvas);
			const observer = new ResizeObserver(() => instance.refreshResolution());
			observer.observe(canvas);
			return () => {
				observer.disconnect();
				instance.dispose();
			};
		} catch (e) {
			error = e;
		}
	});

	$effect(() => {
		if (error == null) {
			return;
		}
		effectState = 'error';
	});

	$effect(() => play());
</script>

<figure {...attrs}>
	{#if effectState === 'playing'}
		<canvas bind:this={canvas} class="w-full h-full"></canvas>
	{:else if fallback != null}
		{@render fallback()}
	{/if}
</figure>
