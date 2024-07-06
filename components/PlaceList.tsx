import Image from 'next/image'
import React, { useState } from 'react'
import PlaceItem from './PlaceItem'
import SideDrawer from './SideDrawer'


const PlaceList = ({ placeList }: any) => { //passing any because object has many variables
    const [selected, setSelected] = useState<any>([]);
    return (
        <div className='w-full'>
            <div className='px-[10px] md:px[120px] mt-7 container mx-auto'>
                <h1 className='text-[20px] font-semibold'>Search Result:</h1>
                <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {placeList.map((place: any, index: number) => (
                        <div key={index} className='' onClick={() => setSelected(place)}>
                            <PlaceItem place={place} />
                        </div>
                    ))}
                </div>
                {selected?.name ? <div className='fixed top-0 right-0 z-20'>
                    <SideDrawer close={() => setSelected([])} />
                </div> : null}
            </div>
        </div>
    )
}

export default PlaceList