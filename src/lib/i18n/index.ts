import I18n, { type Parser } from 'sveltekit-i18n';
import type { Readable } from 'svelte/store';
import type { PropertyStringPath } from '$lib/types/utils';
import en from './locales/en.json';

export type I18nKeys = PropertyStringPath<typeof en> | (string & {});

const i18n = new I18n({
	initLocale: 'en',
	translations: {
		en
	}
});

export const t = i18n.t as Readable<(key: I18nKeys, ...params: Parser.Params) => any>;
export const { l, locales, locale } = i18n;
