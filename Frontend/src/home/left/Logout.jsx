import React from 'react'
import { CiLogout } from "react-icons/ci";
import Cookie from 'js-cookie'
import axios from 'axios'
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

function Lougout() {

    // const response = axios.post('/api/logout')]

    const handleLogout = async function () {

        try {
            const res = await axios.post('/api/logout')
            localStorage.removeItem("messenger")
            Cookies.remove('jwt')
            toast.success("Logout Sucessfully")
        } catch (error) {
                console.log(error)
                toast.error("Failed to Logout")
        }

    }

    return (
        <div className='flex flex-col justify-end w-[3%] bg-slate-950 text-white'>


            <button>
                <CiLogout className="mb-2 w-7 h-[2em] opacity-50 hover:bg-gray-600 duration-300 rounded-lg" onClick={handleLogout} />
            </button>


        </div>
    )
}

export default Lougout