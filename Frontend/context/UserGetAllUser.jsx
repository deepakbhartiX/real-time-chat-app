import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'


function UserGetAllUser() {

  const [allUsers, setUsers] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const getUser = async () => {

      setloading(true)
      try {

        const token = Cookie.get("jwt")
        const response = await axios.get("/api/getallUser", {
          Credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`
          }

        }

        )
        
        // console.log(response.data.filterUsers)
        setUsers(response.data.filterUsers);
        setloading(false)

        

      } catch (error) {
        console.log('Error in UserGetAllUser ' + error)
      }



    }
    getUser()
  }, [])



  return [allUsers, loading]


}

export default UserGetAllUser