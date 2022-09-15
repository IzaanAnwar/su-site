import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Form = () => {
    return (
        <div className="absolute top-[135px] right-[140px] sm:right-[90px] py-1 pl-8 ml-4 w-[300px] max-w-xs mt-1 ">
            <div className="px-4 pt-2 mb-2 w-[350px] rounded-lg shadow-sm shadow-gray-500 bg-gray-700/70 opacity-90 ">
                <div className="">
                    <div className="flex flex-row justify-around">
                        <p className="m-2 text-lg font-semibold text-white">
                            Login Now
                        </p>
                    </div>

                    <div className="flex flex-col pb-2 uppercase">
                        <button
                            className="p-2 ml-[30px] mb-4 w-[250px] bg-white/70 font-extrabold rounded-lg"
                            onClick={() => {
                                signIn('google', {
                                    redirect: false,
                                    callbackUrl: 'http://localhost:3000/seller',
                                });
                            }}
                            type="submit"
                        >
                            Continue with Google
                        </button>
                    </div>
                    <button
                        className="p-2 ml-[30px] mb-4 w-[250px] bg-white/70 rounded-lg font-bold "
                        type="submit"
                    >
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
