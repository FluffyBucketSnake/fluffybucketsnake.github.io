export type Primitive = string | number | bigint | boolean | undefined | null | symbol;

type DeepPropertyKeyFilter<T extends object, K = keyof T> = (T extends any[] | readonly any[]
	? number extends T['length']
		? K & number
		: K & `${number}`
	: K & (number | string)) &
	keyof T;

export type LeafPath<T> = T extends object
	? {
			[K in DeepPropertyKeyFilter<T>]: [K, ...(LeafPath<T[K]> extends never ? [] : LeafPath<T[K]>)];
		}[DeepPropertyKeyFilter<T>]
	: never;

export type AsStringPath<P extends any[]> = P extends [infer F, ...infer R]
	? F extends string | number
		? `${F}${AsStringPath<R> extends never ? '' : `.${AsStringPath<R>}`}`
		: never
	: never;

export type LeafStringPath<T> = AsStringPath<LeafPath<T>>;
