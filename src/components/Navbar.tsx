import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div><div className={shadow ? 'fixed w-full bg-white h-20 shadow-lg shadow-gray-200 z-[100] ' : 'fixed w-full bg-white h-20 z-[100] '}>
            <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
                <Image src='/shu-site.png' alt='/' width='125' height='50' />
                <div>
                    <ul className='hidden p-2 md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase cursor-pointer hover:border-b'>home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase cursor-pointer hover:border-b'>how it works</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase cursor-pointer hover:border-b'>why us</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase cursor-pointer hover:border-b'>buyer</li>
                        </Link>
                        <Link href='/register'>
                            <li className='ml-10 text-sm uppercase cursor-pointer hover:border-b'>seller</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'  >
                        <AiOutlineMenu className='' size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden mt-[80px]  fixed top-0 bottom-5 left-0 w-full h-screen' : ''}>
                <div className={nav
                    ? ' fixed right-0 top-[81px] w-[45%] mr-2 sm:w-[60%] md:w-[45%]   bg-opacity-50 bg-black/80 p-10 '
                    : 'fixed left-[-100%] top-0 h-screen  x-5 ease-in duration-500'} >

                    <div className='flex flex-col '>
                        <ul className='ml-2 text-white uppercase '>
                            <Link href='/'>
                                <li className='py-4 cursor-pointer text-sm hover:text-[#12f5c7] hover:underline hover:animate-pulse'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm cursor-pointer hover:text-[#2fffd5] hover:underline hover:animate-pulse'>How it works</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:text-[#00ffcc] cursor-pointer hover:underline hover:animate-pulse '>Why Us</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:text-[#0ef7c8] hover:underline cursor-pointer hover:animate-pulse'>Buyer</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:text-[#38e7c4] hover:underline cursor-pointer hover:animate-pulse'>Seller</li>
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Navbar