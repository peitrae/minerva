import NextAuth, { NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import {
	NextAuthCallbackJWTParams,
	NextAuthCallbackSessionParams,
} from './[...nextauth].hooks';

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt({ token, account }: NextAuthCallbackJWTParams) {
			// Persist the OAuth access_token to the token right after signin

			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }: NextAuthCallbackSessionParams) {
			// Send properties to the client, like an access_token from a provider.

			session.accessToken = token.accessToken;
			return session;
		},
	},
};
export default NextAuth(authOptions);
