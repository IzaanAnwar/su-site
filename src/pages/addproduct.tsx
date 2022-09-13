import Image from 'next/image';
import React, { useState } from 'react';

const addproduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) =>
            previousImages.concat(imagesArray),
        );

        // FOR BUG IN CHROME
        event.target.value = '';
    };

    return (
        <div className="grid  place-items-center h-screen">
            <div className="flex flex-row p-[5px] m-[110px]">
                <div className="flex w-[290px] h-[390px]  border-red-600 border font-sans">
                    <div className="images">
                        {selectedImages &&
                            selectedImages.map((image, index) => {
                                return (
                                    <div key={image} className="image">
                                        <Image
                                            src={image}
                                            width="400"
                                            className=" transition-all ease-in-out duration-1000 transform translate-x-0 slide"
                                            height="300"
                                            alt="upload"
                                        />
                                    </div>
                                );
                            })}
                    </div>

                    <section>
                        <br />

                        {selectedImages.length > 0 &&
                            (selectedImages.length > 10 ? (
                                <p className="error">
                                    You can't upload more than 10 images! <br />
                                </p>
                            ) : (
                                <button
                                    className="upload-btn"
                                    onClick={() => {
                                        console.log(selectedImages);
                                    }}
                                >
                                    {/* {selectedImages.length}
                                    {selectedImages.length === 1 ? '' : 'S'} */}
                                </button>
                            ))}
                    </section>
                </div>

                <div className=" border border-green-700 ml-[15px]">
                    <div className="flex w-[590px] h-[400px] m-[20px] font-sans">
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg   font-semibold text-slate-900">
                                    SHU - site
                                </h1>

                                <div className="w-full  flex-none text-sm font-bold text-slate-700 mt-2">
                                    Product Name
                                    <div>
                                        <label className="relative block ">
                                            <input
                                                className="border-red-700 border w-[250px] px-2"
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
                                                className="w-[110px] border-emerald-600 border"
                                                name="size"
                                                type="number"
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

                            <div className="flex items-baseline mt-4 mb-6 pb-6 m-[5px] border-b border-green-800">
                                <div className="space-x-2 flex text-sm">
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="checkbox"
                                            value="6"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            6
                                        </div>
                                    </label>

                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="checkbox"
                                            value="7"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            7
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="checkbox"
                                            value="8"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            8
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="checkbox"
                                            value="9"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            9
                                        </div>
                                    </label>

                                    <label>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="checkbox"
                                            value="10"
                                        />
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                            10
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="m-[5px] border border-b-red-700">
                                <label className="text-sm">
                                    {/* + Add Images */}

                                    <span>up to 10 images</span>
                                    <input
                                        type="file"
                                        name="images"
                                        onChange={onSelectFile}
                                        multiple
                                        accept="image/png ,image/jpg, image/jpeg, image/webp"
                                    />
                                </label>
                            </div>
                            {/* <input type="file" multiple /> */}

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
                                </div>
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
