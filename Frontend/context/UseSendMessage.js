import React, { useState } from 'react'
import useConversation from '../src/statemanage/UseConversation.js';
import axios from 'axios'

function UseSendMessage() {
  const [loading, setloading] = useState(false);
  const { selectedConversation, setMessage, messages } = useConversation()


  const SendMessages = async (message) => {
    setloading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          `/api/send/${selectedConversation._id}`,{message}
        );

        

        // console.log(res.data.newMessage.message)
        setMessage([ ...messages,res.data])
        setloading(false);
       
       

      } catch (error) {

        console.log("Error in useSendMessage", error)
        setloading(false);
      }
    }
  }

  
  return {
    loading, SendMessages
  }
}

export default UseSendMessage