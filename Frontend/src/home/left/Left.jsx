import React from 'react'
import Search from './Search'
import Users from './Users'
import Lougout from './Logout'

function left() {
  return (


    <div  className=' w-[30%]  bg-black text-white overflow-y-auto '  >
      <h1 className='font-bold text-[20px] ml-5 '>Chat</h1>
     
      <Search></Search>
      <hr/>
      <Users></Users>
      <Users></Users>
       <Users></Users>
        <Users></Users> 
         <Users></Users>
         <Users></Users>
         <Users></Users>
         <Users></Users>
         <Users></Users>
    </div>


  )
}

export default left