import Image from 'next/image';
import React from 'react';

const addproduct = () => {
    return (
        <div className="grid  place-items-center h-screen">
            <div className="flex flex-row p-[58px] m-[110px]">
                <div className="flex w-[290px] h-[390px]  border-red-600 border font-sans">
                    <Image
                        src="/huu.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        width={300}
                        height={50}
                    />
                </div>

                <div className=" border border-green-700 ml-[15px]">
                    <div className="flex w-[590px] h-[400px] m-[20px] font-sans">
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg   font-semibold text-slate-900">
                                    SHU - site
                                </h1>

                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    name product
                                    <div>
                                        <label className="relative block ">
                                            <input
                                                className="border-red-700 border w-[70px] px-2"
                                                placeholder="Rs..."
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    In stock
                                    <div>
                                        <label>
                                            <input
                                                className=""
                                                name="size"
                                                type="text"
                                                // value="xs"
                                                placeholder="eg...6"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    RS
                                    <div>
                                        <label className="relative block ">
                                            <input
                                                className="border-red-700 border w-[70px] px-2"
                                                placeholder="Rs..."
                                                type="text"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="block">
                                <h1>size</h1>
                            </div>
                            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="space-x-2 flex text-sm">
                                    <label>
                                        <input
                                            className=""
                                            name="size"
                                            type="number"
                                            // value="xs"
                                            placeholder="eg...6"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            XS
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="radio"
                                            value="s"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            S
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="radio"
                                            value="m"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            M
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="radio"
                                            value="l"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            L
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type=""
                                            value="xl"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            XL
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="relative block ">
                                    <input
                                        className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Product Name..."
                                        type="text"
                                        name="search"
                                    />
                                </label>
                            </div>

                            <div className="flex space-x-12 mb-12 text-sm font-medium">
                                <div className="flex-auto flex space-x-4">
                                    <button
                                        className="h-10 mt-4 px-6 font-semibold rounded-md bg-black hoverbg-blue-700 text-white"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                    {/* <button
                                    className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button"
                                >
                                    Add to bag
                                </button> */}
                                </div>
                                {/* <button
                                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                                type="button"
                                aria-label="Like"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    />
                                </svg>
                            </button> */}
                            </div>
                            <p className="text-sm text-slate-700">
                                Free shipping on all continental US orders.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default addproduct;

// import Image from 'next/image';
// import React from 'react';

// const addproduct = () => {
//     return (
//         <>
//             <div className="flex flex-row p-[58px] m-[110px]">
//                 <div className="flex w-[290px] h-[390px] m-[60px] border-red-600 border font-sans">
//                     <Image
//                         src="/huu.png"
//                         alt=""
//                         className="absolute inset-0 w-full h-full object-cover"
//                         loading="lazy"
//                         width={300}
//                         height={50}
//                     />
//                 </div>

//                 <div className="flex w-[590px] h-[400px]   border-blue-600 border font-sans">
//                     <form className="flex-auto p-6 ">
//                         <div className="flex flex-wrap">
//                             <h1 className="flex-auto text-lg   font-semibold text-slate-900">
//                                 SHU - site
//                             </h1>

//                             <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
//                                 name product
//                                 <div>
//                                     <label className="relative block ">
//                                         <input
//                                             className="border-red-700 border w-[70px] px-2"
//                                             placeholder="Rs..."
//                                             type="text"
//                                         />
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
//                                 In stock
//                                 <div>
//                                     <label className="relative block ">
//                                         <input
//                                             className="border-red-700 border w-[70px] px-2"
//                                             placeholder="Rs..."
//                                             type="text"
//                                         />
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
//                                 RS
//                                 <div>
//                                     <label className="relative block ">
//                                         <input
//                                             className="border-red-700 border w-[70px] px-2"
//                                             placeholder="Rs..."
//                                             type="text"
//                                         />
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
//                             <div className="space-x-2 flex text-sm">
//                                 <label>
//                                     <input
//                                         className="sr-only peer"
//                                         name="size"
//                                         type="radio"
//                                         value="xs"
//                                         checked
//                                     />
//                                     <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
//                                         XS
//                                     </div>
//                                 </label>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default addproduct;
