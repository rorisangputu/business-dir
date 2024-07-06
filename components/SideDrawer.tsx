import React from 'react'
import { MdOutlineClose } from "react-icons/md";


const SideDrawer = ({ place, close }: any) => {
    return (
        <div
            className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
            <button className='text-[30px] mx-5' onClick={() => close()}><MdOutlineClose />
            </button>
        </div>
    )
}

export default SideDrawer