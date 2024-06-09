<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { ActivatorProps } from '$lib/components/atoms/modal.svelte';

	export interface Props {
		error: unknown;
		activator?: Snippet<[ActivatorProps]>;
	}
</script>

<script lang="ts">
	import Dialog from '$lib/components/molecules/dialog.svelte';
	import { CanvasBlockedError } from '$lib/errors/canvas-blocked';
	import { WebGL2ShaderCompilationError } from '$lib/errors/webgl2';
	import { t } from '$lib/i18n';
	import IconError from 'virtual:icons/pixelent/error-circle-24-regular';

	let { error, activator }: Props = $props();
</script>

<Dialog title="Error" color="danger" mainClass="flex flex-col text-fg" {activator}>
	{#snippet icon()}
		<IconError />
	{/snippet}
	{#if error instanceof CanvasBlockedError}
		<p class="font-stylized text-lg">{$t('error_messages.blocked_canvas')}</p>
	{:else if error instanceof WebGL2ShaderCompilationError}
		<h3 class="font-stylized text-2xl">{$t('error_messages.shader_compilation')}</h3>
		<span class="mt-2">{$t('error_messages.details')}</span>
		<pre
			class="mt-2 flex-1 border border-separator bg-acrylic/60 p-4 text-danger-250 overflow-auto font-mono"><samp
				>{error.errors
					.map(({ row, column, message }) => `${row}:${column}: ${message}`)
					.join('\n')}</samp
			></pre>
	{:else}
		<h3 class="font-stylized text-2xl">{$t('error_messages.unknown')}</h3>
		<span class="mt-2">{$t('error_messages.details')}</span>
		<pre
			class="mt-2 flex-1 border border-separator bg-acrylic/60 p-4 text-danger-250 overflow-auto font-mono"><samp
				>{error instanceof Error ? error.message : `${error}`}</samp
			></pre>
	{/if}
</Dialog>
