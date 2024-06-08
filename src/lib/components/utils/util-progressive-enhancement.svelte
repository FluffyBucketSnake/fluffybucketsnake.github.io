<script lang="ts" context="module">
	import type { Snippet } from 'svelte';

	export interface Props {
		fallback?: Snippet;
		children: Snippet;
	}
</script>

<script lang="ts">
	let { fallback, children }: Props = $props();

	let hasJs = $state(false);

	$effect(() => {
		hasJs = true;
	});
</script>

{#if hasJs}
	{@render children()}
{:else if fallback != null}
	{@render fallback()}
{/if}
