<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { EventHandler, HTMLAttributes } from 'svelte/elements';

	export interface ActivatorProps {
		onclick: EventHandler<MouseEvent>;
	}

	export interface Props extends HTMLAttributes<HTMLDialogElement> {
		open?: boolean;
		activator?: Snippet<[ActivatorProps]>;
		header?: Snippet;
		children?: Snippet;
	}
</script>

<script lang="ts">
	let {
		open = $bindable(),
		class: classes,
		activator,
		header,
		children,
		onclose,
		...attrs
	}: Props = $props();

	let modalRef: HTMLDialogElement | undefined = $state();

	$effect(() => {
		if (open) {
			modalRef?.showModal();
		} else {
			modalRef?.close();
		}
	});

	const onClose: EventHandler<Event, HTMLDialogElement> = (event) => {
		open = false;
		onclose?.(event);
	};

	export const show = () => (open = true);
	export const close = () => (open = false);
</script>

{#if activator != null}
	{@render activator({ onclick: () => show() })}
{/if}
<dialog
	class="backdrop:backdrop-blur-3xl backdrop:bg-darkest/50 backdrop:animate-fade-out open:backdrop:animate-fade-in max-w-[unset] max-h-[unset] text-fg {classes}"
	bind:this={modalRef}
	onclose={onClose}
	{...attrs}
>
	{#if header}
		{@render header()}
	{/if}
	{#if children}
		{@render children()}
	{/if}
</dialog>
