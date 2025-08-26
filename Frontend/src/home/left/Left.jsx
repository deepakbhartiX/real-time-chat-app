import React from 'react'
import Search from './Search'
import Users from './Users'
import Lougout from './Logout'
import UserGetAllUser from '../../../context/UserGetAllUser'

function left() {

  const [allUsers, loading] = UserGetAllUser()
  // console.log(Array.isArray(allUsers))
  // console.log(allUsers)
    // console.log(Object.values(allUsers))
  return (



    <div className=' w-[30%]  bg-black text-white overflow-y-auto '  >
      <h1 className='font-bold text-[20px] ml-5 '>Chat</h1>

      <Search></Search>
      <hr />

      
      {
        allUsers.map((user, index) => {
          return <Users key={index} user={user}/>
        })
      }

      



    </div>


  )
}

export default left