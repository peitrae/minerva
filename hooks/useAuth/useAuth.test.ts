import { renderHook, act } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';

import { useAuth } from '..';
import { generateRandomString } from '../../utils';

jest.mock('next-auth/react');

describe('useAuth', () => {
	let mockUseSession: any;
	let mockSignIn: any;

	beforeEach(() => {
		mockUseSession = useSession;
		mockSignIn = signIn;
	});

	it('should return unauthenticated data', () => {
		mockUseSession.mockReturnValue({
			data: null,
			status: 'unauthenticated',
		});

		const { result } = renderHook(() => useAuth('spotify'));
		const { session, status } = result.current;

		expect(session).toEqual(null);
		expect(status).toEqual('unauthenticated');
	});

	it('should return authenticated data', () => {
		const mockData = {
			accessToken: generateRandomString(64),
			expires: '2022-12-16T08:00:01.517Z',
			user: {
				email: 'test@test.com',
				name: 'Test',
				image: 'https://test.com/image',
			},
		};

		mockUseSession.mockReturnValue({
			data: mockData,
			status: 'authenticated',
		});

		const { result } = renderHook(() => useAuth('spotify'));
		const { session, status } = result.current;

		expect(session).toEqual(mockData);
		expect(status).toEqual('authenticated');
	});

	describe('handleSignin', () => {
		it('should call signIn function', () => {
			const { result } = renderHook(() => useAuth('spotify'));

			act(() => {
				result.current.handleSignin();
			});

			expect(mockSignIn).toHaveBeenCalled();
		});
	});
});
