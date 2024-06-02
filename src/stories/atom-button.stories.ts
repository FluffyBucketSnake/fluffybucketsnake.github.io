import type { Meta, StoryObj } from '@storybook/svelte';

import AtomButton from '$lib/components/atoms/atom-button.svelte';

const meta: Meta<typeof AtomButton> = {
	title: 'Atoms/Button',
	component: AtomButton,
	args: {
		children: 'Button',
		color: 'Primary'
	},
	argTypes: {
		children: {
			name: 'Text',
			control: 'text'
		},
		color: {
			control: 'select',
			options: ['Primary', 'Secondary'],
			mapping: {
				Primary: 'primary',
				Secondary: 'secondary'
			}
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
	args: {}
};
