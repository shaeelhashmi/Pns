export default function Heading(props: { 
  heading: string;
  afterColor?: string;
  textColor?: string;
}) {
  const afterColor = props.afterColor || '#047957';
  const textColor = props.textColor || 'black';

  return (
    <h1
      className="md:text-4xl sm:text-3xl text-2xl w-fit font-bold after:w-[70%] after:content-[''] after:block after:h-[2px] after:mt-2 block font-georgia"
      style={{
        color: textColor,
        '--after-color': afterColor,
      } as React.CSSProperties & { '--after-color': string }}
    >
      {props.heading}
      <style>{`
        h1::after {
          background-color: var(--after-color) !important;
        }
      `}</style>
    </h1>
  )
}
