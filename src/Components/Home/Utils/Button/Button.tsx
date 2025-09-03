import { Link } from "react-router-dom"
export default function Button({text,link,bg,target}:{text:string,link:string,bg:string,target?:string}) {
  return (
    <>
    {target ? (
        <a href={link} target={target} className={`bg-[${bg}] rounded-[1.7rem] text-white font-arial text-center md:font-base font-sm italic w-fit`} style={{
            display: 'flex',
            padding: '8px 39px',
            gap: '10px',
            boxShadow: '0 -3px 0 0 rgba(0, 0, 0, 0.37) inset'
        }}>
            {text}
        </a>
    ) : (
        <Link to={link} className={`bg-[${bg}] rounded-[1.7rem] text-white font-arial text-center md:font-base font-sm italic w-fit`} style={{
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
