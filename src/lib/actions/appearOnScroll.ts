import type { Action } from 'svelte/action';

export const appearOnScroll: Action<HTMLElement, { animation: string; animationOut: string }> = (
	node,
	{ animation, animationOut }
) => {
	const inClasses = animation.split(' ');
	const outClasses = animationOut.split(' ');
	const onObserveUpdate = (state: boolean) => {
		if (state) {
			node.classList.remove(...outClasses);
			node.classList.add(...inClasses);
		} else {
			node.classList.remove(...inClasses);
			node.classList.add(...outClasses);
		}
	};
	const intersectionObserver = new IntersectionObserver((entries) => {
		onObserveUpdate(entries[0].isIntersecting);
	});
	intersectionObserver.observe(node);
	return {
		destroy() {
			intersectionObserver.disconnect();
		}
	};
};
