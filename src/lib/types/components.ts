import type { Action } from 'svelte/action';

export type ActionWithParam<
	Element = HTMLElement,
	Parameter = undefined,
	Attributes extends Record<string, any> = Record<string, never>
> = [Action<Element, Parameter, Attributes>, Parameter];
