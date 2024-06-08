export type Primitive = string | number | bigint | boolean | undefined | null | symbol;

export type PropertyStringPath<T> = {
	[K in keyof T]: T[K] extends Primitive | any[]
		? `${string & K}`
		: `${K & string}.${PropertyStringPath<T[K]>}`;
}[keyof T];
