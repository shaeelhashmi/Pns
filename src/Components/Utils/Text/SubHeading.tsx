export default function SubHeading(props: {
  subheading: string
  className?: string
  size?: string
  color?: string
}) {
  return (
    <h2
      className={`font-georgia font-bold ${props.className || ""} ${
        props.size ? `text-${props.size}` : "text-2xl"
      }`}
      style={{ color: props.color || "#047957" }} // ✅ inline style for dynamic color
    >
      {props.subheading}
    </h2>
  )
}
