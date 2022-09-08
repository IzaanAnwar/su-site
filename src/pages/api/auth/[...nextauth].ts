import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';
import { env } from '../../../env/server.mjs';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    // Include user.id on session
    callbacks: {
        async jwt({ token, user }) {
            if (user?.token) {
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
        CredentialsProvider({
            credentials: {
                name: {
                    label: 'name',
                    type: 'text',
                },

                email: { label: 'email', type: 'text' },
                phone: { label: 'phone', type: 'text' },
                password: { label: 'password', type: 'text' },
                // address: { label: 'address', type: 'text' },
            },
            async authorize(credentials) {
                if (!credentials) {
                    throw new Error('Missing Properties');
                }
                const user = await prisma.seller.findFirst({
                    where: { email: credentials.email },
                });
                if (!user) {
                    throw new Error('Email is not registered!');
                }
                const result = compare(credentials.password, user.password);
                if (!result) throw new Error('Wrong Credentials!');
                return user;
            },
        }),
    ],

    secret: '1@#$3kjgefkjsdf@#$khsflk$%',
    session: {
        strategy: 'jwt',
        maxAge: 3600,
    },
    jwt: {
        secret: 'IamGod',
        maxAge: 3600,
    },
};

export default NextAuth(authOptions);
