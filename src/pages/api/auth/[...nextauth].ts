import NextAuth, { User, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FaceBookProvider from 'next-auth/providers/facebook';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';
import { env } from '../../../env/server.mjs';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
    // Include user.id on session

    callbacks: {
        async session({ session, user }: { session: any; user: User }) {
            if (session.user) {
                session.user.id = user.id;
            }
            if (session.user?.role) {
                session.user.role = user.role;
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
        // FaceBookProvider({
        //     clientId:,
        //     clientSecret:,
        // })

        // ...add more providers here
    ],

<<<<<<< HEAD
    secret: env.NEXTAUTH_SECRET,
    pages: {
        signIn: '../../register',
        newUser: '../../register',
    },
=======
    secret: '1@#$3kjgefkjsdf@#$khsflk$%',
>>>>>>> a5fd57a60c68aa5391cb6660b9e7fc6edff44252
};

export default NextAuth(authOptions);
