import React from 'react'

export default function Box(props:{Boxes:React.ReactNode,width?:string,className?:string}) {
  return (
        <div className={`relative w-[${props.width || '100%'}] p-7 px-10  my-3  rounded-lg border-2 border-[#047957] [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] ${props.className}`}>
          {/* Left border with gradient */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
        {props.Boxes}
        </div>
  )
}
