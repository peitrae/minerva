import theme from '../styles/theme';
import { STORYBOOK_EXCLUDE_CHAKRA_PROPS } from './variables';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'primary',
    values: [{
      name: 'primary',
      value: '#F8F5FF'
    }]
  },
	chakra: {
		theme,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

/**
 * Global argTypes
 */
export const argTypes = {
  ...STORYBOOK_EXCLUDE_CHAKRA_PROPS
}
