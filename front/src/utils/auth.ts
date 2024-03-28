import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { login } from '@/actions/auth';

import { SimpleAuthUser } from '@/types/user';

export interface JwtUserProps extends SimpleAuthUser {
  jwt: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials): Promise<any> {
        if (!credentials) return null;

        try {
          const result = await login({
            email: credentials.email,
            password: credentials.password,
          });

          if (!result.user && !result.jwt) {
            return null;
          }

          return { ...result.user, jwt: result.jwt };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    session: async ({ session, token }) => {
      const user = {
        ...session.user,
        jwt: token.jwt,
        id: token.userId,
      };

      return {
        ...session,
        user,
      };
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.jwt = (user as unknown as JwtUserProps).jwt;
        token.userId = (user as unknown as JwtUserProps).id;
      }

      return token;
    },
  },
};
