import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import UseSendMessage from '../../../context/UseSendMessage.js';
import useConversation from '../../statemanage/UseConversation.js';
function Type() {
    const {  messages } = useConversation()
    const { loading, SendMessages } = UseSendMessage()
    const [message, setMessage] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        
        await SendMessages(message)
        setMessage("")
        // console.log( messages)
    }
    return (
        <>

            <form onSubmit={handlesubmit}>
                <div className='pl-[20vh] flex   h-[8vh]  bg-gray-800'>

                    <div className=' m-2 text-white w-[70%]'>
                        <input type="text" placeholder="Medium"
                            value={message} onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            className="input rounded-full  w-full" />
                    </div>
                    <div>
                        <button className=' text-[30px] mt-[10.3px] ml-3'>  <IoSend /></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Type