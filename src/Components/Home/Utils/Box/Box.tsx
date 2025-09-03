import Heading from '../../../Utils/Text/Heading'
import SubHeading from '../../../Utils/Text/SubHeading'
import React from 'react'
export default function Box({heading,subheading,description,topColor,remainingElement,svg,border}:{heading:string,subheading:string,description:string,topColor:string,remainingElement?:React.ReactNode,svg:React.ReactNode,border:boolean}) {
  return (
    <div className='space-y-2 border-2 border-[#2D3747] my-3 rounded-2xl relative [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] bg-white' >
        <div style={{background: topColor}} className='p-7 md:px-10 sm:px-5 pl-5  rounded-2xl'>
        <div className='grid grid-cols-[auto_1fr] gap-4 items-center'>

            <div className={`rounded-full   bg-[#E6F0ED] flex items-center justify-center p-3`}>
            <div className='h-fit z-10  w-fit p-[0.12rem]' style={{
                background: border ? 'radial-gradient(circle, #065F46 0%, #047857 50%, #10B981 100%)' : 'transparent'
            }}>
                <div className='bg-[#E6F0ED]'>
         {svg}
</div>

            </div>
            </div>
                        <Heading heading={heading} textColor='white' afterColor='white' ></Heading>
        </div>

        </div>
        <div className='p-7 md:px-10 sm:px-5 pl-5 my-3 rounded-2xl  space-y-2 '>
        <div className='flex items-center space-x-2 italic'>
          
           {subheading==='Synexis' ? (
            <>
            <SubHeading subheading={subheading} color='#047857'></SubHeading>
            <span className='w-10 bg-[#047857] h-1 '></span>
            <SubHeading subheading='Synergy Of Sciences' color='#047857'></SubHeading>
            </>
           ):
           (
            <>
            <SubHeading subheading={subheading} color='#047857'></SubHeading>

            </>
           )
           }
        </div>
        <div>
       <p className='md:text-[1.3rem] text-[1.05rem] font-arial text-[#2D3748]'>{description}</p>
       </div>

{remainingElement}
                </div>
    
    </div>
  )
}
