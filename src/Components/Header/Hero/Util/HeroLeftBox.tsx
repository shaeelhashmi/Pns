interface props{
    heading: string;
    content: string;
    subContent?: string;
    ButtonText:string
}
export default function HeroLeftBox({heading, content, subContent, ButtonText}:props) {
  return (
     <div className='rounded-lg text-white  bg-[#6a6f7754] flex py-7 md:px-20 sm:px-10 px-5 xl:w-[650px] w-full'>
        <div className=' space-y-2 '>
        <span className='block font-georgia'>
       <h3 className='md:text-3xl text-xl font-bold'>{heading}</h3>
       </span>
       <span className='block font-arial space-y-2 text-[#E2E8F0]'>
       <p className='md:text-lg text-base'>{content}</p>
        {subContent && <p className='md:text-lg text-base italic'>{subContent}</p>}
        <button className='bg-[#38A169] italic p-1 rounded-lg md:text-base text-sm'>{ButtonText}</button>
        </span>
       </div>
      </div>
  )
}
