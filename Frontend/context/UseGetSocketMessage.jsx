import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext';
import useConversation from '../src/statemanage/UseConversation';
import sound from "../src/assets/noti.mp3"

function UseGetSocketMessage() {

  const { socket } = useSocketContext();

  // console.log(socket)

  const { messages, setMessage } = useConversation();
  
  

  useEffect(() => {



    socket.on("newMessage", (newMessage) => {

      const notification = new Audio(sound);
      notification.play();

      

      setMessage([...messages, newMessage])

      //  console.log(messages)

      // setMessage(prevMessages => [...prevMessages, newMessage]);


      // useEffect(() => {
      //   console.log("Messages updated:", messages);
      // }, [messages]);



    })

    // console.log(messages)
    return () => socket.off("newMessage")
  }, [socket, setMessage])



}

export default UseGetSocketMessage