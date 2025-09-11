import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'
import useConversation from '../../statemanage/UseConversation.js'
import Loading from '../../../components/Loading.jsx'
import { useAuth } from '../../../context/AuthProvider.jsx'

function right() {
  const { selectedConversation, setSelectedConversation } = useConversation()



  return (
    <>
    <div className=' w-[75%] bg-slate-800 text-white '>

    {!selectedConversation?(<Nochat></Nochat>):(
      
       <>
        <Chatuser> </Chatuser>
        <div className='overflow-y-auto mb-1' style={{ maxHeight: "calc(93vh - 11vh) ", minHeight: "calc(93vh - 11vh) " }}>
          <Message></Message>
        </div>


        <Type></Type>
       </>



      
    )}
    </div>
     
    </>
  )
}

const Nochat = ()=>{
  const{Authuser} = useAuth()
  console.log(Authuser)
  return(<>
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center font-semibold text-xl'>Welcome <span>{Authuser.user.name}</span>
      <br />
      Select a chat to start messaging.</h1>
      
    </div>
  </>)
}


export default right