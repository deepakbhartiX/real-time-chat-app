import React from 'react'

function Search() {
  return (

     

    <div className='h-[10vh] ml-5 text-black pb-4'>
      <label className="input border-[1px] pl-1px rounded-4xl mt-1 w-[90%] bg-emerald-400 outline-2">
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
        <input type="search" required placeholder="Search" />
      </label>
    </div>
  )


}

export default Search