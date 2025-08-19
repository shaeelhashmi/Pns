export default function Subtext(props: any) {
  return (
    <p
      className={`font-georgia ${props.size || "text-2xl"} leading-8`}
      style={{ color: props.color || "#374151" }}
    >
      {props.description}
    </p>
  );
}
