
export default function AuthorText(props:{desc:string,color?:string}) {
  return (
    <p className="arial text-lg" style={{color: props.color || '#718096'}}>
      {props.desc}
    </p>
  )
}
 