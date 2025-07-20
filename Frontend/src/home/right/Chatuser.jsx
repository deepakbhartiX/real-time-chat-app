import React from 'react'

function Chatuser() { 
    return (
        <>

            <div className='pb-2 h-[10vh]  px-2 py-3 bg-gray-900 hover:bg-gray-600 flex space-x-4'>


                <div>

                    <div className="avatar ">
                        <div className="w-13 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>

                </div>

            

                <div>
                    <h1 className='text-xl'>Deepak Bharti</h1>
                    <span className='text-sm'>Online</span>
                </div>
            </div>
        </>
    )
}

export default Chatuser