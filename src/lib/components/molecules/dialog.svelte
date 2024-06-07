<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		color?: 'default' | 'danger';
		class?: HTMLAttributes<HTMLElement>['class'];
		mainClass?: HTMLAttributes<HTMLElement>['class'];
		title?: string;
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
	import Modal from '$lib/components/atoms/modal.svelte';
	import IconClose from 'virtual:icons/pixelent/close-24-regular';

	let { color = 'danger', class: classes, mainClass, title, icon, children }: Props = $props();

	let modalRef: Modal | undefined = $state();

	export const show = () => modalRef?.show();
	export const close = () => modalRef?.close();
</script>

<Modal
	bind:this={modalRef}
	class="m-4 w-full h-full border border-carbon bg-acrylic/60 open:flex flex-col items-stretch drop-shadow-64px {classes}"
	autofocus
>
	{#snippet header()}
		<header class="p-4 flex items-center gap-2 {style[color].title}">
			{#if icon != null}
				{@render icon()}
			{/if}
			<h2 class="font-header text-xl">{title}</h2>
			<AtomButton variant="text" class="ml-auto" color="danger" onclick={() => (close!)()}>
				<IconClose />
			</AtomButton>
		</header>
	{/snippet}
	<main class="flex-1 border-1 border-matte bg-carbon {mainClass}">
		{#if children}
			{@render children()}
		{/if}
	</main>
</Modal>
