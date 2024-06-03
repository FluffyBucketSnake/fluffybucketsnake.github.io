<svelte:options runes={true} />

<script lang="ts">
	import type { RenderEffectFactory } from '$lib/effects/base';
	import type { Snippet } from 'svelte';

	interface Props {
		class: string;
		renderEffect: RenderEffectFactory;
		fallback?: Snippet;
	}

	let { renderEffect, fallback, ...attrs }: Props = $props();

	let state: 'idle' | 'playing' | 'error' = $state('idle');
	let error: unknown = $state(null);
	let canvas: HTMLCanvasElement | undefined = $state();

	const play = () => {
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
