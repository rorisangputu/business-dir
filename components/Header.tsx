import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/logo.jpg";

const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='w-full shadow-md'>
            <div className='container flex mx-auto justify-between p-2 '>
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
            </div>
        </div>
    )
}

export default Header