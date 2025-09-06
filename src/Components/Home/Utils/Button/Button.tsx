import { Link } from "react-router-dom"
export default function Button({text,link,bg,target,hoverBg}:{text:string,link:string,bg:string,target?:string,hoverBg:string}) {
  return (
    <>
    {target ? (
        <a 
  href={link} 
  target={target}
  className="rounded-[1.7rem] text-white font-arial text-center md:font-base font-sm italic w-fit duration-500 transition-all"
  style={{
    display: 'flex',
    padding: '8px 39px',
    gap: '10px',
    boxShadow: '0 -3px 0 0 rgba(0, 0, 0, 0.37) inset',
    backgroundColor: bg
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
>
  {text}
</a>

    ) : (
        <Link to={link} className={`bg-[${bg}] rounded-[1.7rem] text-white font-arial text-center md:font-base font-sm italic w-fit  ${hoverBg ? `hover:bg-[${hoverBg}]` : ''} duration-500 transition-all`} style={{
            display: 'flex',
            padding: '8px 39px',
            gap: '10px',
            boxShadow: '0 -3px 0 0 rgba(0, 0, 0, 0.37) inset'
        }}>
            {text}
        </Link>
    )}
    </>
  )
}
