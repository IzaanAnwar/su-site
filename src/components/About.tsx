import Image from 'next/image'
import React from 'react'

const About = () => {

    return (

        <div className=" bg-white/30 ...">


            <div className="flex flex-col h-screen pb-2 ml-3 uppercase ">
                <div className="mb-4">

                    <div id='about' className='top-[700px] pb-4 relative'>
                        <div className="p-2 m-4 text-4xl text-center">
                            <p>How it Works</p>
                        </div>
                        <div className='flex flex-col m-6 justify-center px-12 sm:flex-row '>
                            <div className=''>
                                <h1 className=''>ions of Lorem Ipsum.</h1>
                            </div>
                            <div className='flex justify-start'>
                                <Image className='rounded-3xl hover:animate-pulse ' src='/about-image.webp' width='350' height='300' alt='/' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About