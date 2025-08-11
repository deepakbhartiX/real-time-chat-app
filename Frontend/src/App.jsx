import React, { useState, useContext } from 'react'
import Right from './home/right/Right.jsx'
import Left from './home/left/Left.jsx'
import Lougout from './home/left/Logout.jsx'
import Signup from '../components/Signup.jsx'
import Login from '../components/Login.jsx'


import { useAuth } from '../context/AuthProvider.jsx'

function App() {
  const {Authuser, setAuthUser} = useAuth()
  console.log(Authuser);


  return (


    <>

      {/* <div className='flex h-screen'>

       <Lougout></Lougout>
        <Left></Left>
        <Right></Right> 
        

      </div> */}

      <div>
        {/* <Signup></Signup> */}
        <Login></Login>
      
      </div>

    </>
  )
}

export default App