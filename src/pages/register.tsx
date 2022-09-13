import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { router } from '@trpc/server';
import { env } from '../env/client.mjs';

const Register = () => {
    const [authMessage, setAuthMessage] = useState(null);

    const router = useRouter();

    return (
        <div className=" text-center ">
            <div>Become a Seller</div>
            <div className="flex flex-col">
                <button
                    onClick={(e) => {
                        signIn('google', {
                            redirect: false,
                            callbackUrl: 'http://localhost:3000/seller',
                        });
                    }}
                >
                    Continue with Google
                </button>
                <button
                    onClick={(e) => {
                        signIn('facebook', {
                            callbackUrl: 'http://localhost:3000/seller',
                        });
                    }}
                >
                    Continue with FaceBook
                </button>
            </div>
        </div>
    );
};

export default Register;
