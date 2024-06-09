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

	let state: 'idle' | 'playing' | 'error' = $state('idle');
	let canvas: HTMLCanvasElement | undefined = $state();

	export const play = () => {
		state = 'playing';
	};

	$effect(() => {
		if (canvas == null || state != 'playing') {
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
		state = 'error';
	});

	$effect(() => play());
</script>

<figure {...attrs}>
	{#if state === 'playing'}
		<canvas bind:this={canvas} class="w-full h-full"></canvas>
	{:else if fallback != null}
		{@render fallback()}
	{/if}
</figure>
