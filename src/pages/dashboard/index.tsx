import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { trpc } from '../../utils/trpc';

const dashboard: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const { data: allProducts, isFetched } = trpc.useQuery([
        'products.getAllData',
    ]);
    if (!isFetched) {
        return <div>Loading...</div>;
    }

    if (!session?.user) {
        return (
            <div className="text-center max-w-fit mx-auto my-8">
                <button
                    className="px-8 py-2 bg-gray-700 rounded-3xl text-gray-200 hover:bg-gray-200 hover:text-gray-700 hover:border-gray-700  focus-visible:bg-gray-300 duration-200 "
                    type="submit"
                    onClick={(e) => {
                        router.push('/');
                    }}
                >
                    Login
                </button>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-3xl font-serif text-center mt-4">
                Explore Now! Buy Shoes At Affordable Prices!
            </h1>
            <ProductCart router={router} productData={allProducts} />
        </>
    );
};

export default dashboard;

const mockData = [
    {
        id: 'alshdaisfi',
        name: 'product1',
        stock: '1',
        size: ['6', '7', '8', '9'],
        price: '299',
        imageUrl:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description:
            'Labore nostrud Lorem nisi laboris exercitation ex cillum officia. ',
        rating: '4',
    },
    {
        id: 'alshdaisfi',
        name: 'product1',
        stock: '1',
        size: ['6', '7', '8'],
        price: '299',
        imageUrl:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description:
            'Labore nostrud Lorem nisi laboris exercitation ex cillum officia. ',
        rating: '4',
    },
    {
        id: 'alshdaisfi',
        name: 'product1',
        stock: '1',
        size: ['6', '7', '8'],
        price: '299',
        imageUrl:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description:
            'Labore nostrud Lorem nisi laboris exercitation ex cillum officia. ',
        rating: '4',
    },
    {
        id: 'alshdaisfi',
        name: 'product1',
        stock: '1',
        size: ['6', '7', '8'],
        price: '299',
        imageUrl:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description:
            'Labore nostrud Lorem nisi laboris exercitation ex cillum officia. ',
        rating: '4',
    },
];

const ProductCart = ({
    router,
    productData,
}: {
    router: NextRouter;
    productData: any;
}) => {
    return (
        <div className="sm:flex sm:p-8 ">
            {mockData?.map((data, index) => {
                return (
                    <div
                        onClick={(e) => {
                            router.push(`/dashboard/${data.id}`);
                        }}
                        className=" sm:max-w-fit p-4 sm:px-8 sm:py-4 bg-gray-200 m-4 rounded hover:shadow duration-200"
                        key={index}
                    >
                        <div className="w-fit  -fit">
                            <Image
                                width={420}
                                height={300}
                                loader={() => {
                                    return data.imageUrl;
                                }}
                                src={data.imageUrl}
                                alt="Product"
                            ></Image>
                        </div>
                        <div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-gray-700 text-xl uppercase">
                                    {data?.name}
                                </h1>
                                <h1 className="sm:ml-8 ml-0">
                                    <span className="font-bold text-gray-900 ml-0 sm:ml-[20px]">
                                        Rating:
                                    </span>
                                    {data.rating}/5
                                </h1>
                            </div>
                            <h1 className="text-gray-800 font-bold  inline">
                                <span className="font-bold text-gray-900">
                                    Rs
                                </span>
                                : {data.price}
                            </h1>

                            <div>
                                <span className="font-bold text-gray-900">
                                    Size
                                </span>
                                :
                                {data.size.map((size) => {
                                    return (
                                        <h1 className="inline hover:bg-gray-500 hover:text-gray-50 font-medium py-1 m-[2px] cursor-pointer rounded-full border-lg px-3 bg-white duration-300">
                                            {size}{' '}
                                        </h1>
                                    );
                                })}
                            </div>
                            <h1>
                                <span className="font-bold text-gray-900">
                                    Remaining
                                </span>
                                : {data.stock}
                            </h1>
                        </div>
                        <div className="inline-block">
                            <h1>
                                <span className="font-bold text-gray-900">
                                    About
                                </span>
                                : {data.description}
                            </h1>
                        </div>
                        <div className="flex justify-between items-center ">
                            <button className="p-2  bg-orange-500 rounded-sm hover:bg-orange-300 duration-200 hover:text-gray-900 active:bg-orange-400">
                                Buy Now
                            </button>
                            <button className="rounded-sm p-2  bg-orange-500 hover:bg-orange-300 duration-200 hover:text-gray-900 active:bg-orange-400">
                                BhulaChodi
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
