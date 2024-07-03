import Image from 'next/image'
import React from 'react'
import bg from '../public/bg.png';
import { IoMdSearch } from "react-icons/io";

const Hero = () => {
    return (
        <div className='w-full'>
            <div className='container text-center mx-auto flex flex-col items-center'>
                <Image src={bg} alt='hero-bg' className='opacity-40 absolute mx-auto w-full mt-[200px]' />
                <div className='mt-[70px]'>
                    <h1
                        className='text-[55px] text-red-600 
                        tracking-widest font-semibold relative'
                    >
                        Discover
                    </h1>
                    <h3 className='text-[20px]'>Your Amazing City</h3>
                    <div className=' flex items-center gap-x-4 p-1 relative 
                        bg-white my-5 border hover:border-red-600 rounded-full
                        shadow-md'>
                        <IoMdSearch className='ml-3 h-5 w-5 text-red-600' />
                        <input type="text" placeholder='Search..' className='focus:outline-none focus:shadow-none'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero