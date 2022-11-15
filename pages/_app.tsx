import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

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

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<ChakraProvider theme={theme}>
			<style jsx global>{`
				html {
					font-family: ${poppins.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
