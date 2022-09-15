import { Session } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { env } from '../env/client.mjs';
import { trpc } from '../utils/trpc';
const seller = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nav, setNav] = useState(false);
    const [hasApplied, setHasApplied] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const router = useRouter();
    const user = trpc.useMutation('user.assignRole');
    const { data: session } = useSession();

    if (session?.user && session.user?.role === 'seller') {
        return (
            <div>
                <div className="fixed w-full h-20 bg-gray-100 shadow-lg z-[100] ">
                    <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
                        <Image src="/huu.png" alt="/" width="125" height="50" />
                        <div>
                            <ul className="hidden p-2 md:flex">
                                <Link href="/">
                                    <li className="ml-10 text-sm uppercase hover:border-b">
                                        how it works
                                    </li>
                                </Link>
                                <Link href="/addproduct">
                                    <li className="ml-10 text-sm cursor-pointer uppercase hover:border-b">
                                        Add Product
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="ml-10 text-sm uppercase hover:border-b">
                                        Inventory
                                    </li>
                                </Link>

                                <button
                                    onClick={() => {
                                        signOut({
                                            callbackUrl: `${env.NEXT_PUBLIC_URL}/register`,
                                        });
                                    }}
                                    className="ml-10 text-sm uppercase hover:border-b"
                                >
                                    Log Out
                                </button>
                            </ul>

                            <div onClick={handleNav} className="md:hidden">
                                <AiOutlineMenu className="" size={25} />
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            nav
                                ? 'md:hidden mt-[80px]  fixed top-0 bottom-5 left-0 w-full h-screen'
                                : ''
                        }
                    >
                        <div
                            className={
                                nav
                                    ? ' fixed right-0 top-[81px] w-[45%] mr-2 sm:w-[60%] md:w-[45%]   bg-opacity-30 bg-black/80 p-10 '
                                    : 'fixed left-[-100%] top-0 h-screen  x-5 ease-in duration-500'
                            }
                        >
                            <div className="flex flex-col ">
                                <ul className="ml-2 text-white uppercase ">
                                    <Link href="/">
                                        <li className="py-4 text-sm hover:text-[#12f5c7] hover:underline hover:animate-pulse">
                                            Home
                                        </li>
                                    </Link>
                                    <Link href="/">
                                        <li className="py-4 text-sm hover:text-[#2fffd5] hover:underline hover:animate-pulse">
                                            Inventory
                                        </li>
                                    </Link>
                                    <Link href="/addproduct">
                                        <li className="py-4 text-sm hover:text-[#00ffcc] hover:underline hover:animate-pulse ">
                                            Add Product
                                        </li>
                                    </Link>
                                    <Link href="/">
                                        <li className="py-4 text-sm hover:text-[#0ef7c8] hover:underline hover:animate-pulse">
                                            Log Out
                                        </li>
                                    </Link>
                                    <Link href="/">
                                        <li className="py-4 text-sm hover:text-[#38e7c4] hover:underline hover:animate-pulse">
                                            Seller
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>

                <div className="flex  justify-center sm:justify-start ml-4 mr-[20px]">
                    <div className="font-serif  absolute top-[100px] m-2 border px-4 py-2 border-gray-400">
                        <p className="flex justify-center">
                            Seller Details{' '}
                            <span className="text-blue-700"> edit</span>
                        </p>

                        <div className="p-4 text-lg w-[405px] sm:w-full text-gray-700">
                            <p className="m-2 p-2 sm:w-[250px]   cursor-pointer   hover:text-cyan-600">
                                Business Name
                            </p>

                            <p className="m-2 p-2 sm:w-[250px]   cursor-pointer   hover:text-cyan-600">
                                Email
                            </p>
                            <p className="m-2 p-2 sm:w-[250px]   cursor-pointer   hover:text-cyan-600">
                                <a href="whatsapp://send?abid=7079252842&text=Hello%2C%20World!">
                                    Send Message
                                </a>
                            </p>
                            <p className="m-2 p-2 sm:w-[250px]   cursor-pointer   hover:text-cyan-600">
                                Aliqua nulla nostrud do veniam dolore veniam
                                reprehenderit nisi ullamco aliquip quis aliquip.
                                Ullamco Lorem est laborum exercitation ut aliqua
                                aliquip aute cupidatat ut officia. Cupidatat
                                tempor qui nisi exercitation deserunt nulla
                                velit non veniam sint nulla anim ullamco et.
                            </p>
                            <p className="m-2 p-2 sm:w-[250px]   cursor-pointer   hover:text-cyan-600">
                                Total Stock
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (session?.user) {
        const makeSeller = (session: Session) => {
            user.mutate({ email: session?.user?.email as string });
            setHasApplied(true);
            router.push('/seller');
            router.reload();
        };

        return (
            <div>
                {hasApplied ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <button onClick={(e) => makeSeller(session)}>
                            Become a Seller
                        </button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <p>You're not logged in!</p>
                <Link href="/">Login Now</Link>
            </div>
        );
    }
};

export default seller;
