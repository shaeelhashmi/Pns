import TransparentImg from '../../../assets/Picture1.png'

interface HeroProps{
  Boxes:React.ReactNode
}
export default function Hero(props: HeroProps) {
  return (
    <div style={{ backgroundSize: 'cover',
    background:`linear-gradient(180deg, #2D3748 5.27%, #1A202C 100%)`
 }} className='w-full my-2 p-2 '>
  <div className=''>
    <div className='w-full h-full bg-cover bg-center  pr-4 py-3' style={{ backgroundImage: `url(${TransparentImg})` }}>
      <div className='md:ml-13 mx-3 md:mx-0  space-y-2 grid xl:grid-cols-2 grid-cols-1 xl:gap-60 gap-10 items-center'>
      {props.Boxes}
   
      </div>
    </div>
      </div>
    </div>
  )
}
