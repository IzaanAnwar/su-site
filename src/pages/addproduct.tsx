import Image from 'next/image';
import React, { useState } from 'react';

const addproduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    // const onSelectFile = (event: { target: { files: any; value: string } }) => {
    //     const selectedFiles = event.target.files;
    //     const selectedFilesArray = Array.from(selectedFiles);

    //     const imagesArray: ConcatArray<never> = selectedFilesArray.map(
    //         (file) => {
    //             return URL.createObjectURL(file);
    //         },
    //     );

    //     setSelectedImages((previousImages) =>
    //         previousImages.concat(imagesArray),
    //     );

    //     // FOR BUG IN CHROME
    //     event.target.value = '';
    // };

    return (
        <div>
            <div className="grid  place-items-center mt-[-90px] sm:mt-0 h-screen bg-my_bg_image ">
                <h1 className="flex text-center mt-[-10px] font-serif text-white  py-4  bg-my_bg_images  text-8xl  w-[380px] px-4 opacity-70  font-extrabold ">
                    Shu-Site
                </h1>
                <div className="flex flex-col sm:flex-row p-[5px] sm:mx-[110px] ">
                    <div className="flex sm:w-[290px] w-[400px] h-[100px] sm:h-[440px] bg-white opacity-60 border-blue-600 border font-sans">
                        <div className="images p-2 pl-4 flex-row flex sm:flex-col ">
                            {selectedImages &&
                                selectedImages.map((image, index) => {
                                    return (
                                        <div
                                            key={image}
                                            className="image sm:w-[250px] sm:h-[70px] w-[70px] h-[150px] "
                                        >
                                            <Image
                                                src={image}
                                                width="250"
                                                height="70"
                                                alt="upload"
                                            />
                                        </div>
                                    );
                                })}
                        </div>

                        <section>
                            <br />

                            {selectedImages.length > 5 ? (
                                <p className="error">
                                    You can't upload more than 6 images! <br />
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
                            )}
                        </section>
                    </div>

                    <div className=" border border-blue-700  mt-4 bg-scroll text-white bg-[#000000] opacity-90 sm:mt-0 sm:ml-[15px]">
                        <div className="flex sm:w-[590px] sm:h-[400px] mt-4 h-[300px] w-[400px] sm:m-[20px] font-sans">
                            <form className="flex-auto p-6">
                                <div className="flex flex-wrap mt-[-41px] p-2">
                                    <h1 className="flex-auto text-lg   font-semibold ">
                                        SHU - site
                                    </h1>

                                    <div className="w-full  flex-none text-sm font-bold  mt-2">
                                        Product Name
                                        <div>
                                            <label className="relative block ">
                                                <input
                                                    className=" border w-[250px] px-2"
                                                    placeholder="name..."
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full flex-none text-sm font-medium  mt-2">
                                        In stock
                                        <div>
                                            <label>
                                                <input
                                                    className="w-[110px]  border-emerald-600 border"
                                                    name="size"
                                                    type="number"
                                                    // value="xs"
                                                    placeholder="eg...6"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full flex-none text-sm font-medium  mt-2">
                                        RS
                                        <div>
                                            <label className="relative block ">
                                                <input
                                                    className="border-red-700 border  w-[70px] px-2"
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

                                <div className="flex items-baseline mt-2   m-[5px] ">
                                    <div className="space-x-2 flex text-sm  ">
                                        <label>
                                            <input
                                                className="sr-only peer"
                                                name="size"
                                                type="checkbox"
                                                value="6"
                                            />
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center  peer-checked:font-semibold peer-checked:bg-white  peer-checked:text-black ">
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
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center  peer-checked:font-semibold peer-checked:bg-white  peer-checked:text-black ">
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
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center  peer-checked:font-semibold peer-checked:bg-white  peer-checked:text-black ">
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
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center  peer-checked:font-semibold peer-checked:bg-white  peer-checked:text-black ">
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
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center  peer-checked:font-semibold peer-checked:bg-white  peer-checked:text-black ">
                                                10
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="m-[5px]  p-2 ">
                                    <label className="text-sm">
                                        {/* + Add Images */}

                                        <span className="">
                                            Add upto 5 images
                                        </span>
                                        <input
                                            className="p-2 "
                                            type="file"
                                            name="images"
                                            // onChange={onSelectFile}
                                            multiple
                                            accept="image/png ,image/jpg, image/jpeg, image/webp"
                                        />
                                    </label>
                                </div>
                                {/* <input type="file" multiple /> */}

                                <div>
                                    <label className="relative block ">
                                        <input
                                            className=" placeholder:italic placeholder:text-slate-400    block  w-full border border-slate-300 rounded-md p-2  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                            placeholder="discriptions..."
                                            type="text"
                                            name="search"
                                        />
                                    </label>
                                </div>

                                <div className="flex space-x-12 mb-12 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button
                                            className="h-10 mt-6 hover:text-black hover:bg-gray-600 px-6 font-semibold rounded-md bg-white hoverbg-blue-700 text-black"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-700 font-extrabold mt-[-40px]">
                                    Free shipping on all continental US orders.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default addproduct;
