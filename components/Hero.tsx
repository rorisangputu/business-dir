"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import bg from '../public/bg.png';
import { IoMdSearch } from "react-icons/io";
import { categories } from '@/data/category';
import Link from 'next/link';

const Hero = ({ handleSearch }: any) => {
    const [input, setInput] = useState<string>();

    return (
        <div className='w-full'>
            <div className='container text-center mx-auto flex flex-col items-center h-[45vh] md:mb-[90px]'>
                {/* <Image src={bg} alt='hero-bg' className='opacity-40 absolute mx-auto w-full mt-[290px] sm:mt-[250px]' /> */}
                <div className='mt-[70px] relative'>
                    <h1
                        className='text-[65px] md:text-[85px] xl:text-[100px] text-red-600 
                        tracking-widest font-semibold relative'
                    >
                        Discover
                    </h1>
                    <h3 className='text-[20px] md:text-[30px] text-[#999999]'>Your Amazing City</h3>
                    <div className=' flex items-center h-[55px] justify-between mx-auto w-[300px] gap-x-4 p-1 relative 
                        bg-white my-5 border hover:border-red-600 rounded-full
                        shadow-md md:w-[500px]'>
                        <div className='flex gap-x-4'>
                            <IoMdSearch className='ml-3 h-5 w-5 text-red-600' />
                            <input
                                type="text"
                                onChange={(e) => setInput(e.target.value)}
                                placeholder='Search..'
                                className='focus:outline-none focus:shadow-none'
                            />
                        </div>
                        <button onClick={() => handleSearch(input)} className=' bg-red-600 w-8 md:w-10 md:h-10 rounded-full text-white p-1 mr-2 text-[12px] md:text-[14px]'>Go</button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h4 className='text-[#999999]'>Browse Categories</h4>
                        <div className='flex gap-3 my-3 '>
                            {categories.map((cat) => (
                                <div key={cat.id} className='flex flex-col items-center 
                                    justify-center bg-white bg-opacity-90 shadow-lg 
                                    rounded-xl h-[60px] w-[60px] md:h-[80px] md:w-[80px] gap-2 md:gap-4 cursor-pointer border hover:border-red-600'
                                >
                                    <Image onClick={() => handleSearch(cat.name)} src={cat.icon} alt='icon' width={25} height={25} />

                                </div>
                            ))}
                        </div>
                        <Link href="/" >
                            <h4 className='text-[#434343] w-20 cursor-pointer hover:text-red-600 relative'>More &gt;</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero