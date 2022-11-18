import { ChakraProvider, theme } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';

import { AuthSection } from '..';
import { useAuth } from '../../../hooks';
import { generateRandomString } from '../../../utils';

jest.mock('../../../hooks');

describe('modules/auth/AuthSection', () => {
	let mockUseAuth: any;

	beforeEach(() => {
		mockUseAuth = useAuth;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render show 'Start with Spotify Premium' button if user is unauthenticated", () => {
		mockUseAuth.mockReturnValue({
			session: null,
			status: 'unauthenticated',
			handleSignin: jest.fn,
		});

		render(
			<ChakraProvider theme={theme}>
				<AuthSection data-testid="auth-section" />
			</ChakraProvider>
		);

		const authSection = screen.getByTestId('auth-section');
		const startWithSpotifyBtn = screen.getByRole('button', {
			name: 'Start with Spotify Premium',
		});

		expect(authSection).toMatchSnapshot();
		expect(startWithSpotifyBtn).toBeVisible();
	});

	it("should render show 'Start a chat' button if user is authenticated", () => {
		mockUseAuth.mockReturnValue({
			session: {
				accessToken: generateRandomString(64),
			},
			status: 'authenticated',
			handleSignin: jest.fn,
		});

		render(
			<ChakraProvider theme={theme}>
				<AuthSection data-testid="auth-section" />
			</ChakraProvider>
		);

		const authSection = screen.getByTestId('auth-section');
		const startChatBtn = screen.getByRole('link', {
			name: 'Start a chat',
		});

		expect(authSection).toMatchSnapshot();
		expect(startChatBtn).toBeVisible();
	});

	it('should render show spinner if authentication is loading', () => {
		mockUseAuth.mockReturnValue({
			session: undefined,
			status: 'loading',
			handleSignin: jest.fn,
		});

		render(
			<ChakraProvider theme={theme}>
				<AuthSection data-testid="auth-section" />
			</ChakraProvider>
		);

		const authSection = screen.getByTestId('auth-section');
		const spinner = screen.getByTestId('spinner');

		expect(authSection).toMatchSnapshot();
		expect(spinner).toBeVisible();
	});
});
