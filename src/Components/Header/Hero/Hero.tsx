import TransparentImg from '../../../assets/Picture1.png'
export default function Hero() {
  return (
    <div style={{ backgroundSize: 'cover',
    background:`linear-gradient(180deg, #2D3748 5.27%, #1A202C 100%)`
 }} className='w-full my-2 p-2 '>
  <div className='ml-13'>
    <div className='w-full h-full bg-cover bg-center flex flex-wrap justify-between   space-y-2 pr-4 py-3' style={{ backgroundImage: `url(${TransparentImg})` }}>
      <div className='rounded-lg text-white  bg-[#6a6f7754] flex py-7 px-20 '>
        <div className='p-7 space-y-2 '>
        <span className='block font-georgia'>
       <h3 className='text-3xl  font-bold'>The Synexis snapshot<span className='block'>Synergy of sciences</span></h3>
       </span>
       <span className='block font-arial space-y-2 text-[#E2E8F0]'>
       <p className='text-lg'>Connecting diverse fields of knowledge through<span className='block'>interdisciplinary research and innovative solutions</span></p>
        <p className='text-lg italic'>σύνεξις - Connection, Union, Coming Together</p>
        <button className='bg-[#38A169] italic p-1 rounded-lg'>Explore Research</button>
        </span>
       </div>
      </div>
      <div className='rounded-lg text-white  bg-[#6a6f7754] flex justify-center items-center p-4  w-[550px] h-[270px]'>
        <div>
            <h3 className='text-lg  font-bold font-arial text-center italic'>Research Categories</h3>
            <div className='grid grid-cols-2 gap-4 my-2'>
                <div className='bg-[#2365ff54]  flex items-center justify-center flex-col rounded-lg w-[220px] h-[65px]'>
                      <p className='text-center font-bold text-base italic'>BioSciences</p>
                    <p className='text-center text-sm text-[#CBD5E0]'>Life Sciences & medicines</p>
                </div>
                <div className='bg-[#b08cff54] flex items-center justify-center flex-col rounded-lg w-[220px] h-[65px]'>
                    <p className='text-center font-bold text-base italic'>Chemistry & materials</p>
                    <p className='text-center text-sm text-[#CBD5E0]'>Chemical Sciences</p>
                </div>
                <div className='bg-[#00FF9F54] flex items-center justify-center flex-col rounded-lg w-[220px] h-[65px]'>  <p className='text-center font-bold text-base italic'>Physical Sciences </p>
                    <p className='text-center text-sm text-[#CBD5E0]'>Physics & mathematics</p></div>
                <div className='bg-[#FF57ED54] flex items-center justify-center flex-col rounded-lg w-[220px] h-[65px]'>  <p className='text-center font-bold text-base italic'>Engineering</p>
                    <p className='text-center text-sm text-[#CBD5E0]'>Applied Sciences</p></div>
            </div>
        </div>
      </div>                
    </div>
      </div>
    </div>
  )
}
