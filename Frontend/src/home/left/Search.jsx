import React, { useState } from 'react'
import UserGetAllUser from '../../../context/UserGetAllUser';
import useConversation from '../../statemanage/UseConversation';
import toast from 'react-hot-toast';

function Search() {

  const [search, setSearch] = useState("");
  const [allUsers] = UserGetAllUser();
  const { setSelectedConversation } = useConversation();

  return (



    <div className='h-[10vh] ml-5 text-black pb-4'>
      <label className="input border-[1px] pl-1px rounded-4xl mt-1 w-[90%] bg-emerald-400 outline-2">
      
        <form onSubmit={( (e)=>{
          e.preventDefault()
          if(!search)return;
          const conversation = allUsers.find((user)=>{
             user.fullname?.toLowerCase().include(search.toLowerCase())
          })
          if(conversation){
            setSelectedConversation(conversation);
            setSearch("")
          }else{
            toast.error("User not found")
          }
          
        })}>
          <svg className="h-[1.7em] opacity-50 hover:bg-gray-600 duration-300 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g



              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </form>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} required placeholder="Search" />
      </label>
    </div>
  )


}

export default Search