export default function Heading(props: { heading: string }) {


  return (
    <h1
      className=" md:text-4xl sm:text-3xl text-2xl w-fit font-bold after:w-[70%] after:content-[''] after:block after:h-[2px] after:bg-[#047957] after:mt-2 block font-georgia"
    >
      {props.heading}
    </h1>
  )
}
