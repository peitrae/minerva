import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonComponent } from '..';

export default {
	title: 'Components/UI/Button',
	component: ButtonComponent,
	argTypes: {
		children: {
			control: 'text',
			defaultValue: 'Label',
		},
		variant: {
			control: 'radio',
			options: ['ghost', 'outline', 'solid', 'link', 'unstyled'],
			defaultValue: 'solid',
		},
		size: {
			control: 'radio',
			options: ['xs', 'sm', 'md', 'lg'],
			defaultValue: 'lg',
		},
		colorScheme: {
			control: 'select',
			options: [
				'primary',
				'whiteAlpha',
				'blackAlpha',
				'gray',
				'red',
				'orange',
				'yellow',
				'green',
				'teal',
				'blue',
				'cyan',
				'purple',
				'pink',
				'linkedin',
				'facebook',
				'messenger',
				'whatsapp',
				'twitter',
				'telegram',
			],
			defaultValue: 'primary',
		},
	},
} as ComponentMeta<typeof ButtonComponent>;

export const Button: ComponentStory<typeof ButtonComponent> = (args) => (
	<ButtonComponent {...args} />
);
