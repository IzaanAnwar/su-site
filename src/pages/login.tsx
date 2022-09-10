import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch('/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password,
    //         }),
    //     })
    //         .then((data) => {
    //             if (data) {
    //                 console.log(email, password)
    //             }
    //         });
    // }

    return (
        <div className="py-1 pl-8 mt-1 ml-4">
            <div className="px-4 pt-10 mb-2 w-[450px] bg-gray-200 mt-[100px] relative left-[450px] rounded-lg shadow-xl shadow-gray-4s00">
                <form>
                    <div className="hidden p-4 sm:block">
                        <div className="flex flex-row justify-around">
                            <p className="m-2 mb-4 text-2xl font-ssemibold">
                                Login Now!
                            </p>
                        </div>

                        <div className="flex flex-col pb-2 ml-3 uppercase">
                            <div className="mb-4  ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Email Or Phone Number
                                </label>
                                <input
                                    name="name"
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pb-2 ml-3 uppercase">
                            <div className="mb-4  ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Password
                                </label>
                                <input
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                className="p-2  ml-[70px] mb-2 w-[250px] bg-gray-500 rounded-lg"
                                type="submit"
                            >
                                Continue
                            </button>
                        </div>
                        <div className="flex flex-row justify-center p-2 ">
                            <h1 className="px-2 text-gray-800">
                                New to Su-Site?
                            </h1>
                            <Link href="/register">
                                <div className="">
                                    <p className="text-blue-700 cursor-pointer">
                                        Register now
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
