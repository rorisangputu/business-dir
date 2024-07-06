import React from 'react'

const SideDrawer = ({ close }: any) => {
    return (
        <div
            className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
            <button onClick={() => close()}>close</button>
        </div>
    )
}

export default SideDrawer