import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'

function right() {
  return (
   <>
    <div className=' w-[70%] bg-slate-950 text-white '>

      <Chatuser> </Chatuser>
      <div className='overflow-y-auto' style={{ maxHeight: "calc(93vh - 11vh)" }}>
        <Message></Message>
      </div>
    
      <Type></Type>
      

      </div>
   </>
  )
}

export default right