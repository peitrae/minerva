import { NextPageWithLayout } from './_app';
import { Center } from '@chakra-ui/react';

import { MainLayout } from '../components/layouts';
import { AuthSection } from '../modules/auth';

const Home: NextPageWithLayout = () => (
	<MainLayout>
		<Center paddingX="1.5rem" height="full">
			<AuthSection />
		</Center>
	</MainLayout>
);

export default Home;
