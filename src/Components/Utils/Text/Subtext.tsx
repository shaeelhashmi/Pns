export default function Subtext(props: {className?: string, color?: string,size?: string, description: string}) {
  return (
    <p
      className={`font-arial ${props.size?"md:"+props.size:"md:text-2xl text-lg"} leading-8 ${props.className || ""}`}
      style={{ color: props.color || "#374151" }}
    >
      {props.description}
    </p>
  );
}
