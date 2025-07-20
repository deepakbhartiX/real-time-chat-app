import React from 'react'
import { IoSend } from "react-icons/io5";
function Type() {
    return (
        <>

            <div className='pl-[20vh] flex   h-[8vh]  bg-gray-800'>

                <div className=' m-2 text-black w-[70%]'>
                   <input type="text" placeholder="Medium" className="input rounded-full  w-full" />
                </div>
                <div>
                  <button className=' text-[30px] mt-[10.3px] ml-3'>  <IoSend /></button>
                </div>
            </div>
        </>
    )
}

export default Type