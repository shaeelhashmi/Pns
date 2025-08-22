
export default function Heading(props:{heading:string,desc:string}) {
  return (
    <div>

      <h1 className='font-arial md:text-[1.63rem] text-xl text-[#6EE7B7] font-bold italic '>{props.heading}</h1>
      <p className=' text-[#CBD5E0] font-arial md:text-lg text-base'>{props.desc}</p>
    </div>

  )
}
