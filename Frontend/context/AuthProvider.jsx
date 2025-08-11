import React, { createContext, useContext, useState } from 'react'
import Cookie from "js-cookie"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const intialUserstate = Cookie.get("jwt") || localStorage.getItem("messenger");

  //parse the user data and storing in state
  const [Authuser, setAuthUser] = useState(intialUserstate ? JSON.parse(intialUserstate) : "local data not found");

  return (

    <AuthContext.Provider value={{Authuser,setAuthUser}}>
     {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)