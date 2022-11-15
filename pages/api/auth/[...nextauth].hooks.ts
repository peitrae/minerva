import { Account, Profile, Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

export interface NextAuthCustomSession extends Session {
	accessToken?: unknown;
}

export interface NextAuthCallbackJWTParams {
	token: JWT;
	user?: User | AdapterUser;
	account?: Account | null;
	profile?: Profile;
	isNewUser?: boolean;
}

export interface NextAuthCallbackSessionParams {
	session: NextAuthCustomSession;
	user: User | AdapterUser;
	token: JWT;
}
