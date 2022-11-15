import { NextPageWithLayout } from './_app';

import { MainLayout } from '../components/layouts';
import { AuthSection } from '../modules/auth';
import { Center } from '@chakra-ui/react';

const Home: NextPageWithLayout = () => (
	<MainLayout>
		<Center paddingX="1.5rem" height="full">
			<AuthSection />
		</Center>
	</MainLayout>
);

// Home.getLayout = function getLayout(page: ReactElement) {
// 	return <MainLayout>{page}</MainLayout>;
// };

export default Home;
