export default function SubHeading(props: {
  subheading: string
  className?: string
  size?: string
  color?: string
}) {
  return (
    <h2
      className={`font-georgia font-bold ${props.className || ""} ${
        props.size ? `md:text-${props.size}` : "md:text-2xl sm:text-xl text-lg"
      }`}
      style={{ color: props.color || "#047957" }} // ✅ inline style for dynamic color
    >
      {props.subheading}
    </h2>
  )
}
