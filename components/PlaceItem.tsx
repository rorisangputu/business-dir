import Image from 'next/image'
import React from 'react'
import rest from "../public/restaurant.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import env from "dotenv";

const PHOTO_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference="
const API_KEY = process.env.NEXT_PUBLIC_PLACES_API;

const PlaceItem = ({ place }: any) => {

    return (
        <div className='mx-auto w-full h-[35vh] border-[1px] rounded-xl  shadow-md flex flex-col items-center'>
            <Image className='h-[200px] w-auto p-2' src={PHOTO_URL + place.photos[0].photo_reference + "&key=" + API_KEY} alt='picture' width={100} height={100} />
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