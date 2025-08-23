export default function Subtext(props: {className?: string, size?: string, color?: string, description: string,font?: string}) {
  return (
    <p
      className={`font-${props.font || "georgia"} ${"md:"+props.size || "md:text-2xl text-xl"} leading-8 ${props.className || ""}`}
      style={{ color: props.color || "#374151" }}
    >
      {props.description}
    </p>
  );
}
