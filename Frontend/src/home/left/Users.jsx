import React from 'react'

function Users() {
    return (

        <div style={{maxHeight:"calc(80px)"}}>

           


            <div className='flex  space-x-4 px-6 py-5 hover:bg-slate-600 duration-300 cursor-pointer'>
                <div className="avatar ">
                    <div className="w-13 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold
                    '>Deepak Bharti</h1>
                    <span>deepak@gmail.com</span>
                </div>

                

                

            </div>


           
                


        </div>
    )
}

export default Users