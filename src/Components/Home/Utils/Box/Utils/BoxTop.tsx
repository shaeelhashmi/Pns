import React from 'react'

export default function BoxTop({topColor, children}:{topColor:string, children: React.ReactNode}) {
    return (
        <div className='p-7 md:px-10 sm:px-5 pl-5  rounded-2xl' style={{background: topColor}}>
            {children}
        </div>
    )
}
