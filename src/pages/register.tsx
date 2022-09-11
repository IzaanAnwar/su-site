import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const Register = () => {
    const [name, setName] = useState('');
    const [error, setIsError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [authMessage, setAuthMessage] = useState(null);
    const checkValidation = () => {
        if (password !== confirmPassword) {
            setIsError('Password does not match!');
            return false;
        }
        return true;
    };
    const router = useRouter();
    async function handleLogin() {
        const data = await fetch('http://localhost:3000/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                phone,
                password,
                email,
                address,
            }),
        })
            .then(async () => {
                signIn('credentials', {
                    email: email,
                    password: password,
                    redirect: false,
                    callbackUrl: 'http://localhost:3000/',
                });
            })
            .catch((error) => {
                console.log(error);
            });
        router.push('sellers');
    }

    return (
        <div className="py-1 pt-2 pl-8 mt-1 ml-4">
            <div className="px-4 pt-4 w-[450px] relative left-[450px] rounded-lg shadow-lg shadow-gray-500">
                <div className="text-red-600 bg-red-300">{error && error}</div>
                <div>{authMessage}</div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                >
                    <div className="hidden sm:block">
                        <div className="flex flex-row justify-around">
                            <p className="text-lg font-semibold ">
                                Register Now!
                            </p>
                        </div>
                        <div className="flex flex-col ml-3 uppercase">
                            <div className="mb-2 ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Bussiness Name
                                </label>
                                <input
                                    name="name"
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Store Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 uppercase">
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
                        <div className="flex flex-col ml-3 uppercase">
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
                        <div className="flex flex-col ml-3 uppercase">
                            <div className="mb-4  ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Confirm Password
                                </label>
                                <input
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="Confirm Passwords"
                                    value={confirmPassword}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 uppercase">
                            <div className="mb-4  ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Address
                                </label>
                                <input
                                    name="name"
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 uppercase">
                            <div className="mb-4  ml-[50px]">
                                <label className="block mb-2 text-sm font-semibold ">
                                    Phone Number
                                </label>
                                <input
                                    name="name"
                                    className="px-2 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
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
                            <div className="flex flex-row justify-center p-2 ml-[50px] mr-[70px] pb-2">
                                <h1 className="px-2 text-gray-800">
                                    New to Su-Site?
                                </h1>
                                <Link href="/login">
                                    <div className="">
                                        <p className="text-blue-700 cursor-pointer">
                                            Login now
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
