import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className=" bg-my_bg_about ">
            <div className="flex flex-col h-screen  uppercase ">
                <div id="about" className="top-[650px] pb-[600px] relative">
                    <br />
                    <div className="text-4xl text-white text-center px-[500px]">
                        <p className="bg-gray-900   ">WHY SHOP WITH US</p>
                    </div>

                    <div className="absolute  grid place-content-center h-[1100px]  bg-[#F7EDDB]/20  px-[250px]  py-[250px] sm:flex-row  ">
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                SIMPLE SHOPPING
                            </span>
                            <br />
                            Whether you shop online or in store or any of the
                            leading third party marketplaces you get the same
                            experience in terms of merchandise, price & service.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                SECURE SHOPPING
                            </span>
                            <br />
                            Shopping on our website is 100% safe and secure as
                            we do not store complete details or payment
                            information of your credit/debit card in our system.
                            This is information is directly transmitted securely
                            to the bank for payment processing. However, caution
                            must always be taken by the customer while making
                            transactions on any online venue.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                RANGE OF PRODUCTS AND BRANDS
                            </span>
                            <br />
                            We assort the collection from the best brands,
                            trends, colours, fabrics, patterns to bring you a
                            deep fashion selection wide across Men, Women, Kids,
                            Fashion Accessories, and Home categories.
                        </p>

                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                FREE RETURNS
                            </span>
                            <br />
                            At Shoppers Stop we follow a policy that is "We are
                            responsible for what we sell". We offer free and
                            easy returns on most of the merchandise bought
                            online. If you are not completely satisfied with
                            your purchase you can return the items via a courier
                            pick up or exchange them in any of our stores across
                            India.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                100% ORIGINAL
                            </span>
                            <br />
                            We are responsible for what we sell and guarantee
                            the originality of the products. All our products
                            are sourced directly from the brands and carry brand
                            warranty and genuineness certificate.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                FREE ALTERATIONS
                            </span>
                            <br />
                            We offer free alteration at any Store for products
                            purchased on online as well.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                EXPRESS STORE PICK UP
                            </span>
                            <br />
                            We provide the facility of express pick up service
                            at the store. You can shop online and collect your
                            order from the nearest or preferred Shoppers Stop
                            store as per your convenience.
                        </p>

                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                PERSONALIZED SHOPPING AT STORE
                            </span>
                            <br />
                            We offer personal shopper service with prior
                            appointment at our store. You can avail the
                            assistance of personal shoppers who are experts to
                            guide you to shop in an exclusive lounge at the
                            store.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                PERSONAL SHOPPER SERVICE AT HOME
                            </span>
                            <br />
                            We also provide Personal Shopper At Home service and
                            you can shop from the comforts of your home with
                            prior appointment with assistance from our personal
                            shoppers.
                        </p>
                        <p className="py-2">
                            <span className="text-gray-900 font-extrabold  ">
                                PERSONALIZED SHOPPING GUIDE
                            </span>
                            <br />
                            We provide personalized shopping assistance by
                            following our Style Hub which is curated with latest
                            fashion trends and suggestions.
                        </p>
                    </div>

                    {/* <div className="flex justify-start">
                        <Image
                            className="rounded-3xl hover:animate-pulse "
                            src="/33.png"
                            width="350"
                            height="300"
                            alt="/"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;
