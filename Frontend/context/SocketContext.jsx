import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthProvider'
import io from "socket.io-client"
import useConversation from '../src/statemanage/UseConversation';

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext)
}

export const SocketProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const { Authuser } = useAuth()
    const [onlineUser, setOnlineUser] = useState([])
    
   const {messages,setMessage} = useConversation();

    // console.log(onlineUser)

    useEffect(() => {
        if (Authuser) {
            const socket = io("http://localhost:8000/", {
                query: {
                    userId: Authuser.user._id,
                   
                }

            })
            setSocket(socket)

            // console.log(socket)

            socket.on("getonline", (users) => {

                setOnlineUser(users)
                // console.log(users)


            })
            // console.log(onlineUser)

            return () => {
                socket.close()
            }

        }
        else {

            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

          

    }, [Authuser])


    return (
        <socketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </socketContext.Provider>
    )
}
