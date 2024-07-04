import Image from 'next/image'
import React from 'react'
import rest from "../public/restaurant.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";

const PlaceItem = ({ place }: any) => {
    return (
        <div className='mx-auto w-full h-[35vh] border-[1px] rounded-xl  shadow-md flex flex-col items-center'>
            <Image src={rest} alt='image' className='rounded-xl h-40 p-2' />
            <div className='flex flex-col w-full p-2'>
                <h2 className='text-lg mb-3'>{place.name}</h2>
                <div className='flex items-center gap-x-2'>
                    <FaLocationDot className='text-red-600' />
                    <p className=' whitespace-nowrap overflow-x-hidden text-ellipsis max-w-[300px]'>{place.formatted_address}</p>
                </div>
                <div className='flex gap-2 mt-3 items-center'>
                    <IoMdStarOutline className='text-red-600' />
                    <p className='text-sm font-semibold'>{place.rating} <span className='text-[#a1a1a1] text-xs font-normal'>by: {place.user_ratings_total} people</span></p>
                </div>
            </div>
        </div>
    )
}

export default PlaceItem