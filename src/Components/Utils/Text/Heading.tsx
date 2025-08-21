export default function Heading(props: any) {
  return (
    <h1 className="w-fit  font-bold text-4xl after:w-[70%] after:content-[''] after:block after:h-[2px] after:bg-[#047957] after:mt-2 block font-georgia">
      {props.heading}
    </h1>
  )
}