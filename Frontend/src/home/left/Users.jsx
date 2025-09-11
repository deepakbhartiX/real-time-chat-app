import React from 'react'
import useConversation from '../../statemanage/UseConversation.js'
import { useSocketContext } from '../../../context/SocketContext.jsx';


function Users({ user }) {

    const { selectedConversation, setSelectedConversation } = useConversation()
     
    const {socket,onlineUser} = useSocketContext()

    const isOnline = onlineUser.includes(user._id)

    // console.log(onlineUser)
    
    const isSelected = selectedConversation?._id === user._id;


    // console.log(selectedConversation)

    
     return (



        < div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} style={{ maxHeight: "calc(80px)" } 
        } onClick={()=>setSelectedConversation(user)}>




            <div className='flex  space-x-4 px-6 py-5 hover:bg-slate-600 duration-300 cursor-pointer '>
                <div className={`avatar ${isOnline?"avatar-online":""} `}>
                    <div className="w-13 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold
                    '>{user.name}</h1>
                    <span>{user.email}</span>
                </div>





            </div>






        </div >
    )
}

export default Users