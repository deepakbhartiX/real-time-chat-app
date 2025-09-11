import React from 'react'
import useConversation from '../../statemanage/UseConversation'
import { useSocketContext } from '../../../context/SocketContext'

function Chatuser({ user }) {


    const { selectedConversation } = useConversation()
    const { onlineUser } = useSocketContext()

    // const isOnline = onlineUser.includes(user._id)
    // const isOnline = onlineUser.includes(user._id)
    const getOnlineStatus = (userId) => {
        return onlineUser.includes(userId) ? "online" : "offline"
    }
    // console.log(selectedConversation.name)

    return (

        <>

            <div className='pb-2 h-[10vh]  px-2 py-2 bg-gray-900 hover:bg-gray-600 flex space-x-4'>


                <div>

                    <div className={`avatar avatar-${getOnlineStatus(selectedConversation._id)}`}>
                        <div className="w-13 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>

                </div>



                < div >
                    <h1 className='text-xl'>{selectedConversation.name}</h1>
                    <span className='text-sm'>{getOnlineStatus(selectedConversation._id)}</span>

                </div >

            </div>
        </>
    )
}


export default Chatuser