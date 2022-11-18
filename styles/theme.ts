import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	colors: {
		primary: {
			700: '#381F7F',
			600: '#542EBF',
			500: '#703EFE',
			400: '#B79EFF',
			300: '#DBCFFF',
			200: '#F1ECFF',
			100: '#F8F5FF',
		},
		gray: {
			700: '#616569',
			600: '#92979D',
			500: '#C2C9D1',
			400: '#E1E4E8',
			300: '#F0F2F3',
			200: '#F9FAFA',
			100: '#FCFCFD',
		},
	},
});

export default theme;
