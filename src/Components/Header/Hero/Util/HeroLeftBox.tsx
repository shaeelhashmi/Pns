interface props{
    heading: string;
    content: string;
    subContent?: string;
    ButtonText:string;
    link: string;
}
export default function HeroLeftBox({heading, content, subContent, ButtonText,link}:props) {
  return (
     <div className='rounded-lg text-white  bg-[#6a6f7754] flex py-7 md:px-20 sm:px-10 px-5 xl:w-[650px] w-full'>
        <div className=' space-y-2 '>
        <span className='block font-georgia'>
       <h3 className='md:text-3xl text-xl font-bold'>{heading}</h3>
       </span>
       <span className='block font-arial space-y-2 text-[#E2E8F0]'>
       <p className='md:text-lg text-base'>{content}</p>
        {subContent && <p className='md:text-lg text-base italic'>{subContent}</p>}
        <a className='bg-[#38A169] italic p-1 rounded-lg md:text-base text-sm hover:bg-[#46AE76] duration-500 transition-all' href={link} target={link.startsWith('#') ? undefined : '_blank'}>{ButtonText}</a>
        </span>
       </div>
      </div>
  )
}
