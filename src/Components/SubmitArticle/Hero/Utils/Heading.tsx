
export default function Heading(props:{heading:string,desc:string}) {
  return (
    <div>

      <h1 className='font-arial text-[1.63rem] text-[#6EE7B7] font-bold italic '>{props.heading}</h1>
      <p className=' text-[#CBD5E0] font-arial text-lg'>{props.desc}</p>
    </div>

  )
}
