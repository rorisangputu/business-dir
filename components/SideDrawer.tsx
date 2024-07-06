import Image from 'next/image';
import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";


const PHOTO_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=500&photo_reference="
const API_KEY = process.env.NEXT_PUBLIC_PLACES_API;

const SideDrawer = ({ place, close }: any) => {
    return (
        <div
            className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
            <button
                className='text-[30px] mx-5'
                onClick={() => close()}
            >
                <MdOutlineClose />
            </button>
            <div className='mx-5 my-5'>
                <div className='flex items-center justify-between mb-3'>
                    <p className='line-clamp-2 text-[23px] font-medium '>{place.name} </p>
                    <p className='font-light text-[#bbbbbb] text-[23px] '>{place.opening_hours ? "Open" : "Closed"}</p>
                </div>
                <Image className='object-fill rounded-xl' src={PHOTO_URL + place.photos[0].photo_reference + "&key=" + API_KEY} alt='picture' width={500} height={500} />
                <div className='my-5'>
                    <div className='flex items-center gap-x-2'>
                        <FaLocationDot className='text-red-600 text-2xl' />
                        <p className=' '>{place.formatted_address}</p>
                    </div>
                    <div className='flex gap-2  items-center'>
                        <IoMdStarOutline className='text-red-600 text-2xl' />
                        <p className='text-lgfont-semibold'>{place.rating} <span className='text-[#a1a1a1] text-xs font-normal'>by: {place.user_ratings_total} people</span></p>
                    </div>
                </div>
                <div className='flex gap-x-3 text-white'>
                    <div className='bg-red-600 hover:bg-red-700 cursor-pointer w-[150px] h-[40px] rounded-full flex items-center justify-center gap-x-2'>
                        <GrMapLocation />
                        <p>Directions</p>
                    </div>
                    <div className='bg-red-600 hover:bg-red-700 cursor-pointer w-[150px] h-[40px] rounded-full flex items-center justify-center gap-x-2'>
                        <IoShareSocialOutline />
                        <p>Share</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideDrawer