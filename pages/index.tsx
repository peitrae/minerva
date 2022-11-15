import { NextPageWithLayout } from './_app';
import { Center } from '@chakra-ui/react';

import { MainLayout } from '../components/layouts';
import { AuthSection } from '../modules/auth';
import { signOut } from 'next-auth/react';

const Home: NextPageWithLayout = () => (
	<MainLayout>
		<Center paddingX="1.5rem" height="full">
			<AuthSection />
      <button onClick={() => signOut()}>Sign out</button>
		</Center>
	</MainLayout>
);

export default Home;
