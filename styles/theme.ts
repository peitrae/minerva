import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: 'full',
	},
};

const Input: ComponentStyleConfig = {
	sizes: {
		xs: {
			field: {
				borderRadius: 'full',
			},
		},
		sm: {
			field: {
				borderRadius: 'full',
			},
		},
		md: {
			field: {
				borderRadius: 'full',
			},
		},
		lg: {
			field: {
				borderRadius: 'full',
			},
		},
	},
	variants: {
		outline: {
			field: {
				backgroundColor: 'gray.400',
				_placeholder: {
					color: 'gray.700',
				},
			},
		},
	},
	defaultProps: {
		focusBorderColor: 'primary.600',
	},
};

const theme = extendTheme({
	colors: {
		/**
		 * The base color is 500
		 */
		primary: {
			700: '#381F7F',
			600: '#542EBF',
			500: '#703EFE',
			400: '#B79EFF',
			300: '#DBCFFF',
			200: '#F1ECFF',
			100: '#F8F5FF',
		},
		warning: {
			800: '#7C4F0F',
			700: '#B97717',
			600: '#F79F1F',
			500: '#FBCF8F',
			400: '#FDE7C7',
			300: '#FEF5E9',
			200: '#FFFAF4',
		},
		gray: {
			800: '#616569',
			700: '#92979D',
			600: '#C2C9D1',
			500: '#E1E4E8',
			400: '#F0F2F3',
			300: '#F9FAFA',
			200: '#FCFCFD',
		},
	},
	components: {
		Input,
		Button,
	},
});

export default theme;
