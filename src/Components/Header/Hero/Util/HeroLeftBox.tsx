interface props{
    heading: string;
    content: string;
    subContent?: string;
    ButtonText:string
}
export default function HeroLeftBox({heading, content, subContent, ButtonText}:props) {
  return (
     <div className='rounded-lg text-white  bg-[#6a6f7754] flex py-7 px-20 xl:w-[650px] w-full'>
        <div className='p-7 space-y-2 '>
        <span className='block font-georgia'>
       <h3 className='text-3xl  font-bold'>{heading}</h3>
       </span>
       <span className='block font-arial space-y-2 text-[#E2E8F0]'>
       <p className='text-lg'>{content}</p>
        {subContent && <p className='text-lg italic'>{subContent}</p>}
        <button className='bg-[#38A169] italic p-1 rounded-lg'>{ButtonText}</button>
        </span>
       </div>
      </div>
  )
}
