<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDialogElement> {
		class?: HTMLAttributes<HTMLElement>['class'];
		header?: Snippet;
		children?: Snippet;
	}
</script>

<script lang="ts">
	let { class: classes, header, children, ...attrs }: Props = $props();

	let modalRef: HTMLDialogElement | undefined = $state();

	export const show = () => modalRef?.showModal();
	export const close = () => modalRef?.close();
</script>

<dialog
	class="backdrop:backdrop-blur-3xl backdrop:bg-darkest/50 {classes}"
	bind:this={modalRef}
	{...attrs}
>
	{#if header}
		{@render header()}
	{/if}
	{#if children}
		{@render children()}
	{/if}
</dialog>
