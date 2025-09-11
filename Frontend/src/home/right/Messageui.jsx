import React from 'react'

function Messageui({ message }) {

    const authUser = JSON.parse(localStorage.getItem("messenger"));

    
    const itme = authUser.user._id === message.senderId;

    const chatname = itme ? "chat-start" : "chat-end"
    const chatcolor = itme ? "bg-blue-400" : ""

    const createdAt = new Date(message.createdAt)
    
    const formattedTime = createdAt.toLocaleDateString([],{
        hour:"2-digit",
        minute:"2-digit"
    })

    //    console.log(message)

    return (
        <>

            <div className={`chat ${chatname} `}>
               
                <div className="chat-header">
                    
                    <time className="mb-1 text-xs opacity-50">{formattedTime}</time>
                   
                </div>

                <div className={`chat-bubble text-white ${chatcolor} `}>{message.message}</div>

            </div>

        </>
    )
}

export default Messageui