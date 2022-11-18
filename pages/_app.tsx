import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import theme from '../styles/theme';

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

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<SessionProvider session={session}>
			<ChakraProvider theme={theme}>
				<style jsx global>{`
					html {
						font-family: ${poppins.style.fontFamily};
					}
				`}</style>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	);
}
