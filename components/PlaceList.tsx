import Image from 'next/image'
import React from 'react'
import PlaceItem from './PlaceItem'


const PlaceList = ({ placeList }: any) => { //passing any because object has many variables
    return (
        <div className='w-full'>
            <div className='px-[10px] md:px[120px] mt-7 container mx-auto'>
                <h1 className='text-[20px] font-semibold'>Search Result:</h1>
                <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {placeList.map((place: any, index: number) => (
                        <div key={index} className=''>
                            <PlaceItem place={place} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlaceList