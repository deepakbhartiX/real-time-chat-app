import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext';
import useConversation from '../src/statemanage/UseConversation';
import sound from "../src/assets/noti.mp3"

function UseGetSocketMessage() {

  const { socket } = useSocketContext();

 

  const { messages, setMessage } = useConversation();


  useEffect(() => {

    


    socket.on("newMessage", (newMessage) => {

      const notification = new Audio(sound);
      notification.play();


      console.log(newMessage)



      setMessage([...messages, newMessage])


      

    })

   
    return () => socket.off("newMessage")
  }, [socket, setMessage,messages])

  // useEffect(() => {
  //   console.log("Messages updated:", messages);
  // }, [messages]);


}

export default UseGetSocketMessage