import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { trpc } from '../../utils/trpc';

export default function displayProduct() {
    const router = useRouter();
    const { data: session } = useSession();
    // const product = trpc.useQuery([
    //     'products.getByID',
    //     { productID: router.query.productId },
    // ]);
    if (!session?.user) {
        return <div>Loading...</div>;
    }
    const imageURL =
        'https://images.unsplash.com/photo-1662997928780-527effae2443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
    return (
        <div className="bg-indigo-100 min-w-screen min-h-screen">
            <div className="sm:flex min-w-screen min-h-fit sm:px-24 sm:py-16 ">
                <div className="sm:min-w-[500px] w-screen  h-fit ">
                    <img
                        alt="shoe image"
                        className="sm:rounded-3xl hover:animate-pulse"
                        src={imageURL}
                    />
                </div>
                <div className="px-8 sm:px-16  py-8 text-gray-700 font-bold min-w-full">
                    <h1 className="text-3xl  py-2 ">US POLO</h1>

                    <div>
                        <h1 className="text-lg py-2">Rating: 4/5</h1>
                        <hr className="w-[360px] bg-black sm:w-[500px]" />
                        <h1 className="text-xl py-2">Rs: 299</h1>
                        <h1 className="txet-lg ">Seller Address: some guy</h1>
                        <div className="py-2">
                            <label htmlFor="size">Size: </label>
                            <select
                                className="rounded px-2 py-[2px]"
                                name="size"
                                id="size"
                            >
                                <option value="select">select</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:pr-48 py-8 min-w-screen sm:w-[500px] flex justify-between">
                        <button className="px-6 border-2 text-white border-gray-900 bg-indigo-500 py-4">
                            Buy Now
                        </button>
                        <button className="px-6 border-2 border-gray-900  bg-white py-4">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-8 sm:px-16 py-8">
                <h1 className="text-3xl font-thin ">Product Details</h1>
                <hr className="w-[200px] sm:w-[200px]" />
                <div className="text-md font-light pt-4 sm:text-lg pb-2 pl-2">
                    <h1>
                        <span className="font-medium ">Date First Arrival</span>
                        : 04/05/2022
                    </h1>
                    <h1>
                        <span className="font-medium">Manufacturer</span>:
                        Indian/ Asian
                    </h1>
                    <h1>
                        <span className="font-medium">Departmental</span>: All
                    </h1>
                    <h1>
                        <span className="font-medium">Supplier</span>: Seller
                        Name
                    </h1>
                    <h1>
                        <span className="font-medium">Supplier Address</span>:
                        Seller Addresss
                    </h1>
                </div>
            </div>
        </div>
    );
}
