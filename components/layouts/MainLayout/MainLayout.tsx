import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { MainHeader } from '../../ui';
import { MainLayoutProps } from './MainLayout.hooks';

const MainLayout: FC<MainLayoutProps> = ({ children, ...rest }) => (
	<Stack bgColor="primary.100" height="full" {...rest}>
		<MainHeader />
		{children}
	</Stack>
);

export default MainLayout;
