<script lang="ts" context="module">
	import type { ComponentType, Snippet } from 'svelte';
	import Modal, { type ActivatorProps } from '$lib/components/base/modal.svelte';

	export interface ModalProps {
		static?: false;
		activator?: Snippet<[ActivatorProps]>;
	}

	export interface StaticProps {
		static: true;
	}

	export interface SharedProps {
		class?: string;
	}

	export type Props = SharedProps & (ModalProps | StaticProps);
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

	let { ...props }: Props = $props();

	let modalRef: Modal | undefined = $state();
</script>

{#snippet menuItem(icon: ComponentType, id: string, href: string, active: boolean)}
	<a
		{href}
		class="relative pl-5 pr-4 py-2 flex gap-2 items-center text-fg focus:outline-0
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

{#snippet menuItems()}
	{@render menuItem(IconHouse, 'home', '/', $page.route.id === '/')}
	{@render menuItem(IconNews, 'blog', '/blog', $page.route.id === '/blog')}
	{@render menuItem(IconPerson, 'me', '/me', $page.route.id === '/me')}
	{@render menuItem(IconCup, 'donate', '/donate', $page.route.id === '/donate')}
{/snippet}

{#if props.static}
	<nav
		class="w-240px min-h-full py-4 flex flex-col bg-acrylic/60 open:animate-appear-left {props.class}"
	>
		{@render menuItems()}
	</nav>
{:else}
	<Modal
		bind:this={modalRef}
		class="m-0 -left-8 -top-8 w-[calc(100%_+_32px)] lg:max-w-[272px] h-[calc(100%_+_32px)] lg:border-r border-carbon pl-8 pt-8 open:flex flex-col bg-acrylic/60 drop-shadow-32px open:animate-appear-left {props.class}"
		activator={props.activator}
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
			{@render menuItems()}
		</nav>
	</Modal>
{/if}
