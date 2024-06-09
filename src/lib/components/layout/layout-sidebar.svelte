<script lang="ts" context="module">
	import type { ComponentType, Snippet } from 'svelte';
	import Modal, { type ActivatorProps } from '$lib/components/atoms/modal.svelte';

	export interface Props {
		open?: boolean;
		activator?: Snippet<[ActivatorProps]>;
	}
</script>

<script lang="ts">
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import IconClose from 'virtual:icons/pixelent/close-24-regular';
	import IconHouse from 'virtual:icons/pixelent/house-32-regular';
	import IconNews from 'virtual:icons/pixelent/news-32-regular';
	import IconPerson from 'virtual:icons/pixelent/person-32-regular';
	import IconCup from 'virtual:icons/pixelent/cup-32-regular';
	import { page } from '$app/stores';
	import { t } from '$lib/i18n';

	let { open = $bindable(), activator }: Props = $props();

	let modalRef: Modal | undefined = $state();

	export const show = $derived(modalRef!.show);
	export const close = $derived(modalRef!.close);
</script>

{#snippet menuItem(icon: ComponentType, id: string, href: string, active: boolean)}
	<a
		{href}
		class="
			relative pl-5 pr-4 py-2 flex gap-2 items-center text-fg focus:outline-0
  {active
			? "bg-fg/15 cursor-default before:absolute before:content-['_'] before:left-0 before:w-1 before:h-full before:bg-fg"
			: 'hover:bg-fg/5 focus:bg-fg/5 active:bg-fg/15'}"
	>
		<i>
			<svelte:component this={icon} />
		</i>
		<span class="font-stylized leading-none">{$t(`sidebar.pages.${id}`)}</span>
	</a>
{/snippet}

<Modal
	bind:this={modalRef}
	bind:open
	class="m-0 -left-8 -top-8 w-[calc(100%_+_32px)] lg:max-w-[272px] h-[calc(100%_+_32px)] lg:border-r border-carbon pl-8 pt-8 open:flex flex-col bg-acrylic/60 drop-shadow-32px open:animate-appear-left"
	{activator}
>
	<AtomButton
		aria-label={$t('sidebar.labels.close')}
		class="fixed top-10 left-10 p-2"
		variant="text"
		shadow
		onclick={() => modalRef!.close()}
	>
		<IconClose />
	</AtomButton>

	<nav class="flex-col mt-14">
		{@render menuItem(IconHouse, 'home', '/', $page.route.id === '/')}
		{@render menuItem(IconNews, 'blog', '/blog', $page.route.id === '/blog')}
		{@render menuItem(IconPerson, 'me', '/me', $page.route.id === '/me')}
		{@render menuItem(IconCup, 'donate', '/donate', $page.route.id === '/donate')}
	</nav>
</Modal>
