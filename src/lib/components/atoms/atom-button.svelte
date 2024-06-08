<script lang="ts" context="module">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ActionWithParam } from '$lib/types/components';
	import type { Action } from 'svelte/action';

	export interface ISharedProps {
		color?: 'default' | 'primary' | 'secondary' | 'danger';
		shadow?: boolean | '8px';
		variant?: 'filled' | 'text';
		prependIcon?: Snippet;
		appendIcon?: Snippet;
	}

	export interface ILinkVariantProps extends HTMLAnchorAttributes {
		href: string;
		use?: (Action<HTMLAnchorElement> | ActionWithParam<HTMLAnchorElement>)[];
	}

	export interface IActionVariantProps extends HTMLButtonAttributes {
		href?: undefined;
		use?: (Action<HTMLButtonElement> | ActionWithParam<HTMLButtonElement>)[];
	}

	export type Props = ISharedProps & (ILinkVariantProps | IActionVariantProps);

	const style = {
		base: 'font-stylized align-middle text-center transition duration-75 ease-in-out focus:outline-0 grid gap-2 items-center justify-center',
		layout: {
			0: 'grid-cols-[1fr]',
			1: 'grid-cols-[auto_1fr]',
			2: 'grid-cols-[1fr_auto]',
			3: 'grid-cols-[1fr_auto_1fr]'
		},
		variants: {
			filled: {
				base: 'p-2',
				default:
					'border border-matte hover:border-separator focus:border-separator-hl active:border-carbon bg-carbon hover:bg-matte focus:bg-matte active:bg-carbon text-fg',
				primary:
					'border border-primary-400 hover:border-primary-200 focus:border-primary-200 active:border-primary-500 bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-600 text-primary-fg',
				secondary:
					'border border-secondary-400 hover:border-secondary-200 focus:border-secondary-200 active:border-secondary-500 bg-secondary-500 hover:bg-secondary-400 focus:bg-secondary-400 active:bg-secondary-600 text-secondary-fg',
				danger:
					'bg-danger-500 hover:bg-danger-250 focus:bg-primary-250 active:bg-primary-750 text-danger-fg'
			},
			text: {
				base: 'p-1 border-transparent bg-transparent',
				default: 'text-fg hover:bg-fg/5 focus:bg-fg/5 active:bg-fg/15',
				primary: '',
				secondary: '',
				danger:
					'text-danger-250 hover:bg-danger-250/15 focus:bg-danger-250/15 active:bg-danger-250/30'
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
		color = 'default',
		shadow = false,
		variant = 'filled',
		prependIcon,
		appendIcon,
		use,
		...attrs
	}: Props = $props();

	const useDropShadow = $derived(variant == 'text');
	const classes = $derived(
		`${style.base} ${style.layout[((prependIcon ? 1 : 0) | (appendIcon ? 2 : 0)) as 0 | 1 | 2 | 3]} ${style.variants[variant].base} ${style.variants[variant][color]} ${shadow && style.shadows[useDropShadow ? 'drop' : 'box'][shadow === '8px' ? 8 : 4]} ${attrs.class}`
	);
</script>

{#snippet content()}
	{#if prependIcon != null}
		<i>{@render prependIcon()}</i>
	{/if}
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
