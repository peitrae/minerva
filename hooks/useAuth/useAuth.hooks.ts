import { useSession, signIn } from 'next-auth/react';

import { NextAuthCustomSession } from '../../pages/api/auth/[...nextauth].hooks';

const useAuth = (provider: string) => {
	const { data, status } = useSession();
  
	function handleSignin() {
		signIn(provider);
	}

	return {
		session: data as NextAuthCustomSession | null,
		status,
		handleSignin,
	};
};

export default useAuth;
