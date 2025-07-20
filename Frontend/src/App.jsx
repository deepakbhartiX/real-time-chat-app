import React from 'react'
import Right from './home/right/Right.jsx'
import Left from './home/left/Left.jsx'
import Lougout from './home/left/Logout.jsx'

function App() {
  return (
    <>

      <div className='flex h-screen'>

      <Lougout></Lougout>
        <Left></Left>
        <Right></Right>

      </div>

    </>
  )
}

export default App