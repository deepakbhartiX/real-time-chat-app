import React from 'react'

function Loading() {
    return (
        <div className='overflow-y-auto mt-4 ml-[35%] mt-[10%]' style={{ maxHeight: "calc(92vh - 11vh) " }}>

            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    )
}

export default Loading