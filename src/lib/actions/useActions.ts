import type { ActionWithParam } from '$lib/types/components';
import type { Action } from 'svelte/action';

export function useActions<
	Element,
	ActionList extends (Action<Element> | ActionWithParam<Element>)[]
>(node: Element, actions: ActionList | undefined) {
	let _actions = new Map<Action<Element>, any>();

	if (actions) {
		for (const action of actions) {
			if (Array.isArray(action)) {
				_actions.set(action[0], action[0](node, action[1]));
			} else {
				_actions.set(action, action(node, undefined));
			}
		}
	}

	return {
		update(actions: ActionList) {
			if (actions) {
				for (const action of actions) {
					if (Array.isArray(action)) {
						const act = _actions.get(action[0]);
						if ('update' in act) {
							act.update(action[1]);
						}
					} else {
						const act = _actions.get(action);
						if ('update' in act) {
							act.update(undefined);
						}
					}
				}
			}
		},

		destroy() {
			_actions.forEach((act) => {
				if ('destroy' in act) {
					act.destroy();
				}
			});
		}
	};
}
