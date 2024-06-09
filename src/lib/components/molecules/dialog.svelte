<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		open?: boolean;
		color?: 'default' | 'danger';
		class?: HTMLAttributes<HTMLElement>['class'];
		mainClass?: HTMLAttributes<HTMLElement>['class'];
		title?: string;
		activator?: Snippet<[ActivatorProps]>;
		icon?: Snippet;
		children?: Snippet;
	}

	const style = {
		default: { title: 'text-fg' },
		danger: {
			title: 'text-danger-250'
		}
	};
</script>

<script lang="ts">
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import Modal, { type ActivatorProps } from '$lib/components/base/modal.svelte';
	import IconClose from 'virtual:icons/pixelent/close-24-regular';

	let {
		open = $bindable(),
		color = 'danger',
		class: classes,
		mainClass,
		title,
		activator,
		icon,
		children
	}: Props = $props();

	let modalRef: Modal | undefined = $state();

	export const show = $derived(modalRef!.show);
	export const close = $derived(modalRef?.close);
</script>

<Modal
	bind:this={modalRef}
	bind:open
	class="lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-4 lg:m-0 w-full h-full lg:max-w-[992px] lg:max-h-[736px] lg:w-min lg:h-min border border-carbon p-2 bg-acrylic/60 open:flex flex-col items-stretch drop-shadow-64px {classes}"
	autofocus
	{activator}
>
	{#snippet header()}
		<header class="p-2 pb-4 flex items-center gap-2 {style[color].title}">
			{#if icon != null}
				{@render icon()}
			{/if}
			<h2 class="font-header text-xl leading-none">{title}</h2>
			<AtomButton variant="text" class="ml-auto" color="danger" onclick={() => (close!)()}>
				<IconClose />
			</AtomButton>
		</header>
	{/snippet}
	<main class="flex-1 border-1 border-highlight bg-carbon p-4 {mainClass}">
		{#if children}
			{@render children()}
		{/if}
	</main>
</Modal>
