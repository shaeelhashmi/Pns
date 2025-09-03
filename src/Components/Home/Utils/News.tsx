import BoxTop from "./Box/Utils/BoxTop"
import SVGCircle from "./SVGC/SVGCircle"
export default function News() {
  return (
    <div className="border-2 border-[#1D3FAB] rounded-2xl">
    <div className="space-y-2">
      <BoxTop topColor="#1E41B0">
           <div className='grid grid-cols-[auto_1fr] gap-4 items-center'>
       
                   <SVGCircle border={false} svg={<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="25" fill="#E6F0ED"/>
  
  <rect x="14" y="14" width="22" height="22" rx="2" stroke="#1E40AF" strokeWidth="2"/>
  <path d="M20 25L23 28L30 21" stroke="#1E40AF" strokeWidth="2"/>
</svg>

}/>

       <h2 className="md:text-2xl text-xl w-fit font-bold after:w-[70%] after:content-[''] after:block after:h-[2px] after:mt-2 block font-georgia text-white">
        Latest Research
       </h2>
  
                </div>
                      </BoxTop> 
                      <p className="md:text-lg text-base text-[#1E40AF] font-arial text-center font-bold">Recent Publications & Updates</p>

        </div> 
                    
    </div>
  )
}
