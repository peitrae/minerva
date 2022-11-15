import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { MainHeader } from '../../ui';

interface MainLayoutProps {
	children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
	<Stack bgColor="primary.100" height="full">
		<MainHeader />
		{children}
	</Stack>
);

export default MainLayout;
