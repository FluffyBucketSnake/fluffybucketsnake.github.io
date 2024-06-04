<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ActionWithParams } from '$lib/types/components';
	import type { Action } from 'svelte/action';

	export interface ISharedProps {
		color?: 'primary' | 'secondary';
		shadow?: boolean | '8px';
		variant?: 'filled' | 'text';
		appendIcon?: Snippet;
	}

	export interface ILinkVariantProps extends HTMLAnchorAttributes {
		href: string;
		use?: (Action<HTMLAnchorElement> | ActionWithParams<HTMLAnchorElement>)[];
	}

	export interface IActionVariantProps extends HTMLButtonAttributes {
		href: undefined;
		use?: (Action<HTMLButtonElement> | ActionWithParams<HTMLButtonElement>)[];
	}

	export type Props = ISharedProps & (ILinkVariantProps | IActionVariantProps);

	const style = {
		base: 'font-stylized align-middle text-center transition duration-75 ease-in-out focus:outline-0 grid gap-2 items-center justify-center',
		layout: {
			none: 'grid-cols-[1fr]',
			append: 'grid-cols-[1fr_auto]'
		},
		variants: {
			filled: {
				base: 'border p-2',
				primary:
					'border-primary-400 hover:border-primary-200 focus:border-primary-200 active:border-primary-500 bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-600 text-primary-fg',
				secondary:
					'border-secondary-400 hover:border-secondary-200 active:border-secondary-500 bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-600 text-secondary-fg'
			},
			text: {
				base: 'p-1 border-transparent bg-transparent hover:bg-fg/5 focus:bg-fg/5 active:bg-fg/15',
				primary: '',
				secondary: ''
			}
		},
		shadows: {
			box: {
				4: 'shadow-4px hover:shadow-8px focus:shadow-8px active:shadow-2px',
				8: 'shadow-8px hover:shadow-16px focus:shadow-16px active:shadow-4px'
			},
			drop: {
				4: 'drop-shadow-4px hover:drop-shadow-8px focus:drop-shadow-8px active:drop-shadow-2px',
				8: 'drop-shadow-8px hover:drop-shadow-16px focus:drop-shadow-16px active:drop-shadow-4px'
			}
		}
	};
</script>

<script lang="ts">
	import { useActions } from '$lib/actions/useActions';

	const {
		href,
		children,
		color = 'primary',
		shadow = false,
		variant = 'filled',
		appendIcon,
		use,
		...attrs
	}: Props = $props();

	const useDropShadow = $derived(variant == 'text');
	const classes = $derived(
		`${style.base} ${style.layout[appendIcon != null ? 'append' : 'none']} ${style.variants[variant].base} ${style.variants[variant][color]} ${shadow && style.shadows[useDropShadow ? 'drop' : 'box'][shadow === '8px' ? 8 : 4]} ${attrs.class}`
	);
</script>

{#snippet content()}
	{#if typeof children == 'function'}
		{@render children()}
	{:else if children != null}
		{children}
	{/if}
	{#if appendIcon != null}
		<i>{@render appendIcon()}</i>
	{/if}
{/snippet}

{#if href != null}
	<a {...attrs as HTMLAnchorAttributes} class={classes} {href} use:useActions={use}>
		{@render content()}
	</a>
{:else}
	<button {...attrs as HTMLButtonAttributes} class={classes} use:useActions={use}>
		{@render content()}
	</button>
{/if}
