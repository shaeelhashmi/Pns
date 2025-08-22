export default function Heading(props: { size?: string; heading: string }) {

  const fontSize = props.size || "2.25rem"

  return (
    <h1
      style={{ fontSize }}
      className="w-fit font-bold after:w-[70%] after:content-[''] after:block after:h-[2px] after:bg-[#047957] after:mt-2 block font-georgia"
    >
      {props.heading}
    </h1>
  )
}
