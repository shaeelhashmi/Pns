import Subtext from '../../../Utils/Text/Subtext'
import SubHeading from '../../../Utils/Text/SubHeading'
import Box from '../../../Utils/Text/Box/Box'
interface props{
  img:string,
  Name:string,
  Title:string,
  Affiliation:string,
  colSpan?:string
  className?:string
}
export default function AdvisoryBox(props:props) {
  return (
    <>
       <Box   className={`xl:w-[46vw]  w-full ${props.colSpan?"col-span-"+props.colSpan:""} ${props.className}`}>
<div className="space-y-2 grid grid-cols-[auto_1fr] place-content-center gap-11">
                <div className=' flex items-center'>
                    <div className='rounded-full  w-20 h-20' style={{backgroundImage: `url(${props.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                </div>
                    <div className=' space-y-2'>
                        <SubHeading subheading={props.Name} size='[1.4rem]' className='sm:text-[1.15rem] text-[1.07rem]'/>
                        <p className='md:text-lg sm:text-base text-[0.95rem] italic font-bold font-arial'>{props.Title}</p>
                         <Subtext description={props.Affiliation} size="text-[0.94rem]" className='text-xs' color="#4A5568"/>
                  </div>
    <div className='col-start-2'>
    <a className='bg-[#d5ffe8] text-black font-arial font-bold italic py-2 px-4 rounded-lg text-[0.94rem]'
      href={`?author=${props.Name.toLowerCase().replace(/\s+/g, '-')}`}
    >View Profile →</a>
    </div>
                </div>

       </Box>

</>
  )
}
