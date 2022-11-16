import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';

import { MainHeader } from '..';
import theme from '../../../styles/theme';

describe('Header', () => {
	describe('MainHeader', () => {
		it('should render correctly', () => {
			render(
				<ChakraProvider theme={theme}>
					<MainHeader data-testid="main-header" />
				</ChakraProvider>
			);

			const mainHeader = screen.getByTestId('main-header');
			const logo = screen.getByTestId('logo');
			const title = screen.getByTestId('title');

			expect(mainHeader).toMatchSnapshot();
			expect(logo).toBeVisible();
			expect(title).toBeVisible();
		});
	});
});
