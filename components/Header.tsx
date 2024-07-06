import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/logo.jpg";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import arrow from "../public/arrow_icon.png"


const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full shadow-md'>
            <div className='container flex mx-auto items-center justify-between p-2 '>
                <div className='flex gap-3 items-center'>
                    <Image src={logo} alt='Logo' width={50} height={50} />
                    <h2 className='text-[15px] text-red-500 font-semibold tracking-widest'>Find.Where</h2>
                </div>
                <ul className='hidden md:flex gap-4 items-center justify-end'>
                    <li className='text-[15px] hover:text-red-600 cursor-pointer'>Home</li>
                    <li className='text-[15px] hover:text-red-600 cursor-pointer'>About Us</li>
                    <li className='text-[15px] hover:text-red-600 cursor-pointer'>Contact</li>
                    <li className='text-[15px] hover:text-red-600 cursor-pointer'>Sign Up</li>
                </ul>
                {/* MENU BUTTON */}
                <div onClick={handleNav} className='block md:hidden mr-3 '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {/* HAMBURGER MENU */}
                <div className={nav ? `fixed left-0 top-0 w-[60%] h-full z-10
                  bg-white ease-in-out duration-500 `
                    : `fixed left-[-100%]`}
                >
                    <div className='m-5 pt-5 '>
                        <div className='h-8'>

                            <h1 className='w-full font-space-grotesk text-black text-3xl font-bold uppercase'>CoinVue</h1>

                        </div>
                    </div>
                    <ul onClick={() => { setNav(false) }} className='cursor-pointer text-black text-xl'>
                        <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'>Home</li>
                        <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'><a href="#market-updates">Market</a></li>
                        <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'><a href="#why-us">Why Us</a></li>
                        <li className='pl-7 p-4 hover:bg-purple-900 duration-50 '><a href="#download">Download</a></li>
                    </ul>
                    <div className='flex mt-2 w-[150px] justify-center items-center rounded-lg bg-white text-black'>
                        <button className='h-8 flex items-center 
                            justify-center rounded-md font-medium text-xl p-2'
                        >
                            Sign up
                        </button>
                        <Image className='object-contain' src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header