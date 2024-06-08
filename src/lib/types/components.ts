import type { Action } from 'svelte/action';

export type ActionWithParam<
	Element = HTMLElement,
	Parameter = unknown,
	Attributes extends Record<string, any> = Record<never, any>
> = [Action<Element, Parameter, Attributes>, Parameter];
