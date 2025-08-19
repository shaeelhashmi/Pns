import Subtext from '../Text/Subtext'
import SubHeading from '../Text/SubHeading'
interface props{
  Abbrev:string,
  Name:string,
  Title:string,
  Affiliation:string,
  colSpan?:string
  className?:string
}
export default function AdvisoryBox(props:props) {
  return (
    <>
           <div className={`relative w-[46vw]  my-3   rounded-lg border-2 border-[#047957]  [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] p-7 px-10 ${props.colSpan?"col-span-"+props.colSpan:""} ${props.className}`}>
                {/* Left border with gradient */}
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />

                <div className="space-y-2 grid grid-cols-[auto_1fr] place-content-center gap-11">
                <div className=' flex items-center'>
                    <div className='rounded-full border-2 border-[#047857] w-fit p-3'>
                        <p className='font-arial text-base italic font-bold '>{props.Abbrev}</p>
                    </div>
                </div>
                    <div className=' space-y-2'>
                        <SubHeading subheading={props.Name} size='[1.4rem]'/>
                        <p className='text-lg italic font-bold font-arial'>{props.Title}</p>
                         <Subtext description={props.Affiliation} size="text-[0.94rem]" color="#4A5568"/>
</div>
    <div className='col-start-2'>
    <button className='bg-[#d5ffe8] text-black font-arial font-bold italic py-2 px-4 rounded-lg text-[0.94rem]'>View Profile →</button>
    </div>
                </div>

              </div>
</>
  )
}
