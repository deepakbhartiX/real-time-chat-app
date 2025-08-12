import React, { useState, useContext } from 'react'
import Right from './home/right/Right.jsx'
import Left from './home/left/Left.jsx'
import Lougout from './home/left/Logout.jsx'
import Signup from '../components/Signup.jsx'
import Login from '../components/Login.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useAuth } from '../context/AuthProvider.jsx'

function App() {
  const { Authuser, setAuthUser } = useAuth()
  console.log(Authuser);


  return (


    <>



      <Routes>

        <Route path='/' element={Authuser ? <div className='flex h-screen'>

          <Lougout></Lougout>
          <Left></Left>
          <Right></Right>


        </div> : <Navigate to={"/login"} />} />

        <Route path='/login' element={Authuser ? <Navigate to={"/"} /> : <Login />} />

        <Route path='/signup' element={Authuser ? <Navigate to={"/"} /> : <Signup />} />

      </Routes>



    </>
  )
}

export default App