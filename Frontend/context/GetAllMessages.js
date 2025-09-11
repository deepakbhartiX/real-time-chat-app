import React, { useEffect, useState } from 'react'
import useConversation from '../src/statemanage/UseConversation.js';
import axios from 'axios';

function GetAllMessages() {

    const [loading, setloading] = useState(false);
    const { selectedConversation, setMessage, messages } = useConversation()

    useEffect(() => {
        const GetMessages = async () => {
            setloading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(
                        `/api/getmessage/${selectedConversation._id}`
                    );

                    //   console.log(res.data)
                    setMessage(res.data)
                    
                  
                    setloading(false);




                } catch (error) {

                    console.log("Error in useGetMessage", error)
                    setloading(false);

                }
            }
        }

        GetMessages()
    }, [selectedConversation, setMessage])

    return {
        loading, messages
    }
}

export default GetAllMessages