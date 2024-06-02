<script lang="ts" context="module">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export interface ISharedProps {
		color?: 'primary' | 'secondary';
		shadow?: boolean | '8px';
	}

	export interface ILinkVariantProps extends HTMLAnchorAttributes {
		href: string;
	}

	export interface IActionVariantProps extends HTMLButtonAttributes {
		href: undefined;
	}

	export type Props = ISharedProps & (ILinkVariantProps | IActionVariantProps);

	const baseClasses =
		'border p-2 font-stylized align-middle text-center transition duration-75 ease-in-out focus:ring-0';
	const primaryClasses =
		'border-primary-400 hover:border-primary-200 focus:border-primary-200 active:border-primary-500 bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-600 text-primary-fg';
	const secondaryClasses =
		'border-secondary-400 hover:border-secondary-200 active:border-secondary-500 bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600 text-secondary-fg';
	const shadow4pxClasses = 'shadow-4px hover:shadow-8px focus:shadow-8px active:shadow-2px';
	const shadow8pxClasses = 'shadow-8px hover:shadow-16px focus:shadow-16px active:shadow-4px';
</script>

<script lang="ts">
	const { href, children, color = 'primary', shadow = false, ...attrs }: Props = $props();

	const isPrimary = $derived(color == 'primary');
	const isSecondary = $derived(color == 'secondary');
	const uses4pxShadow = $derived(shadow === true);
	const uses8pxShadow = $derived(shadow === '8px');
	const classes = $derived(
		`${baseClasses} ${isPrimary && primaryClasses} ${isSecondary && secondaryClasses} ${uses4pxShadow && shadow4pxClasses} ${uses8pxShadow && shadow8pxClasses} ${attrs.class}`
	);
</script>

{#if href != null}
	<a {...attrs as HTMLAnchorAttributes} class={classes} {href}>
		{#if typeof children == 'function'}
			{@render children()}
		{:else if children != null}
			{children}
		{/if}
	</a>
{:else}
	<button {...attrs as HTMLButtonAttributes} class={classes}>
		{#if typeof children == 'function'}
			{@render children()}
		{:else if children != null}
			{children}
		{/if}
	</button>
{/if}
