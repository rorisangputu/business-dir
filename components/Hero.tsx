"use client";
import Image from 'next/image'
import React from 'react'
import bg from '../public/bg.png';
import { IoMdSearch } from "react-icons/io";
import { categories } from '@/data/category';
import Link from 'next/link';

const Hero = () => {
    const handleSearch = () => {

    }
    return (
        <div className='w-full'>
            <div className='container text-center mx-auto flex flex-col items-center h-[45vh]'>
                <Image src={bg} alt='hero-bg' className='opacity-40 absolute mx-auto w-full mt-[270px]' />
                <div className='mt-[70px] relative'>
                    <h1
                        className='text-[55px] text-red-600 
                        tracking-widest font-semibold relative'
                    >
                        Discover
                    </h1>
                    <h3 className='text-[20px] text-[#999999]'>Your Amazing City</h3>
                    <form className=' flex items-center mx-auto w-[300px] gap-x-4 p-1 relative 
                        bg-white my-5 border hover:border-red-600 rounded-full
                        shadow-md'>
                        <IoMdSearch className='ml-3 h-5 w-5 text-red-600' />
                        <input type="text" placeholder='Search..' className='focus:outline-none focus:shadow-none'
                        />
                        <button onSubmit={handleSearch} className=' bg-red-600 w-8 rounded-full text-white p-1 mr-2 text-[12px]'>Go.</button>
                    </form>
                    <div className='flex flex-col justify-center items-center'>
                        <h4 className='text-[#999999]'>Browse Categories</h4>
                        <div className='flex gap-3 my-3 '>
                            {categories.map((cat) => (
                                <div key={cat.id} className='flex flex-col items-center 
                                    justify-center bg-white bg-opacity-90 shadow-lg 
                                    rounded-xl h-[60px] w-[60px] gap-2 cursor-pointer border hover:border-red-600'
                                >
                                    <Image src={cat.icon} alt='icon' width={25} height={25} />

                                </div>
                            ))}
                        </div>
                        <Link href="/all" >
                            <h4 className='text-[#434343] w-20 cursor-pointer hover:text-red-600 relative'>More &gt;</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero