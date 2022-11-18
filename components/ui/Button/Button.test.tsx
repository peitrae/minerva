import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { Button } from '..';
import theme from '../../../styles/theme';

describe('Button', () => {
	it('should render correctly', () => {
		render(
			<ChakraProvider theme={theme}>
				<Button>Label</Button>
			</ChakraProvider>
		);

		const button = screen.getByRole('button', { name: 'Label' });

		expect(button).toBeVisible();
    expect(button).toMatchSnapshot();
	});
});
