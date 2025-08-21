import Hero from "../../Header/Hero/Hero"
import HeroLeftBox from "../../Header/Hero/Util/HeroLeftBox"
export default function AboutHero() {
  return (
    <div>
      <Hero Boxes={[ <HeroLeftBox heading="The Synexis snapshot Synergy of sciences" content="Connecting diverse fields of knowledge through interdisciplinary research and innovative solutions" subContent="σύνεξις - Connection, Union, Coming Together" ButtonText="Explore Research" />,
               <div className='rounded-lg text-white  bg-[#6a6f7754] flex justify-center items-center p-4  w-full h-[270px]'>
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
        ]}/>
    </div>
  )
}
