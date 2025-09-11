import React, { useEffect, useRef } from 'react'
import Messageui from './Messageui'
import GetAllMessages from '../../../context/GetAllMessages.js'
import Loading from '../../../components/Loading.jsx'
import UseGetSocketMessage from '../../../context/UseGetSocketMessage.jsx'

function Messege() {

  const { loading, messages } = GetAllMessages()
  
     UseGetSocketMessage()
  // console.log(loading)


  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });

      }
    }, 100)
  }, [messages])




  return (
    <>

      <div className='p-2  ' style={{ minHeight: "calc(93vh - 14.3vh)" }} >

        {/* {console.log(messages)} */}
        {/* { console.log( messages.length == undefined)} */}


        {loading ? (<Loading></Loading>) : (messages.length > 0 && messages.map((messages ,index) => {
           return <div key={index} ref={lastMessageRef}>
            <Messageui message={messages}/>
          </div>
        }))}

        {!loading && messages.length == undefined && <div className='text-center mt-[20%] font-bold'><p>Say! Hii</p></div>}


      </div>
    </>
  )
}

export default Messege