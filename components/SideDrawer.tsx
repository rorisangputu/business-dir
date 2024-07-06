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
    const onDirectionClick = () => {
        window.open("https://www.google.com/maps/search/?key=" + API_KEY + "&q=" + place.name + place.formatted_address);
    }
    return (
        <div
            className='h-screen w-screen md:w-[600px] border border-red-600 bg-white shadow-md p-3 z-20'>
            <button
                className='text-[30px] mx-5'
                onClick={() => close()}
            >
                <MdOutlineClose />
            </button>
            <div className='mx-5  my-5'>
                <div className='flex flex-col justify-start mb-3 mx-auto'>
                    <p className='line-clamp-2 text-[23px] font-medium '>{place.name} </p>
                    <p className='font-light text-[#bbbbbb] text-[23px] '>{place.opening_hours ? "Open" : "Closed"}</p>
                </div>
                <Image className='object-fill mx-auto w-full rounded-xl' src={PHOTO_URL + place.photos[0].photo_reference + "&key=" + API_KEY} alt='picture' width={500} height={500} />
                <div className='my-5 mx-auto'>
                    <div className='flex items-center gap-x-2'>
                        <FaLocationDot className='text-red-600 text-2xl' />
                        <p className=' '>{place.formatted_address}</p>
                    </div>
                    <div className='flex gap-2  items-center'>
                        <IoMdStarOutline className='text-red-600 text-2xl' />
                        <p className='text-lgfont-semibold'>{place.rating} <span className='text-[#a1a1a1] text-xs font-normal'>by: {place.user_ratings_total} people</span></p>
                    </div>
                </div>
                <div className='flex gap-x-3 mb-5 text-white mx-auto'>
                    <div onClick={() => onDirectionClick()} className='bg-red-600 hover:bg-red-700 cursor-pointer w-[150px] h-[40px] rounded-full flex items-center justify-center gap-x-2'>
                        <GrMapLocation />
                        <p>Directions</p>
                    </div>
                    <div className='bg-red-600 hover:bg-red-700 cursor-pointer w-[150px] h-[40px] rounded-full flex items-center justify-center gap-x-2'>
                        <IoShareSocialOutline />
                        <p>Share</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <iframe
                        className="border:0 h-[270px] w-full rounded-xl md:w-[600px] "
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src={"https://www.google.com/maps/embed/v1/place?key=" + API_KEY + "&q=" + place.name + "&center=" + place.geometry.location.lat + "," + place.geometry.location.lng}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer