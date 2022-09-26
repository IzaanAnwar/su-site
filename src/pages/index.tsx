import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Landing from '../components/Landing';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
    const { data: session } = useSession();

    const user = trpc.useQuery([
        'user.getUser',
        { email: session?.user?.email },
    ]);

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Landing />
            </main>
        </>
    );
};

export default Home;
