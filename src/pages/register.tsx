import { useRouter } from 'next/router';
import React from 'react';
import { signIn } from 'next-auth/react';

const Register = () => {
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
