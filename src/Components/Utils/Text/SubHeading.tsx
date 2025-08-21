
export default function SubHeading(props:{subheading:string, className?:string,size?:string} ) {
  return (
     <h4 className={`text-${props.size ? props.size : '2xl'} text-[#047957] font-georgia font-bold ${props.className? props.className : ''}`} >
        {props.subheading}
      </h4>
  )
}
