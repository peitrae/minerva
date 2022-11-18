import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
	stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
    '@chakra-ui/storybook-addon'
	],
  features: {
    emotionAlias: false,
  },
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
		disableTelemetry: true,
	},
  typescript: {
    // Optionally run fork-ts-checker-webpack-plugin
    check: false,

    // Options to pass to fork-ts-checker-webpack-plugin if it's enabled
    checkOptions: {},

    // Which react docgen processor to run: "react-docgen-typescript", "react-docgen", false
    reactDocgen: 'react-docgen-typescript',

    // Options to pass to react-docgen-typescript-plugin if react-docgen-typescript is enabled.
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  }
};

module.exports = config;
