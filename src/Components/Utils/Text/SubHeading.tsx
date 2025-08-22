
export default function SubHeading(props:{subheading:string, className?:string,size?:string,color?:string} ) {
  return (
     <h4 className={`text-${props.size ? props.size : '2xl'} text-${props.color ? props.color : '#047957'} font-georgia font-bold ${props.className? props.className : ''}`} >
        {props.subheading}
      </h4>
  )
}
