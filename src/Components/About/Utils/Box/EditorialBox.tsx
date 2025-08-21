
import SubHeading from '../../../Utils/Text/SubHeading'
import Subtext from '../../../Utils/Text/Subtext'
export default function EditorialBox(props:{Heading:string,desc:string,button:string}) {
  return (
    <>
           <div className="relative w-[100%] p-7 px-10  my-3   rounded-lg border-2 border-[#047957]  [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] ">
                {/* Left border with gradient */}
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
          
                <div className="space-y-2 ">
                  <SubHeading subheading={props.Heading} />
                  <Subtext description={props.desc} size="text-lg" color="#4A5568"/>
                </div>
                <button className='p-1 bg-[#D5FFE8] font-arial italic font-bold mt-5'>{props.button}</button>
              </div>
</>
  )
}
