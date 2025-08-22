import Hero from "../../Header/Hero/Hero"
import HeroLeftBox from "../../Header/Hero/Util/HeroLeftBox"
export default function AboutHero() {
  return (
    <div>
      <Hero Boxes={[ <HeroLeftBox heading="The Synexis snapshot Synergy of sciences" content="Connecting diverse fields of knowledge through interdisciplinary research and innovative solutions" subContent="σύνεξις - Connection, Union, Coming Together" ButtonText="Explore Research" />,
               <div className='rounded-lg text-white  bg-[#6a6f7754] flex justify-center items-center md:px-20 sm:px-10 px-5 py-7   w-full md:h-[270px]'>
        <div className="max-sm:w-full">
            <h3 className='md:text-lg text-base font-bold font-arial text-center italic'>Research Categories</h3>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 my-2'>
                <div className='bg-[#2365ff54]  flex items-center justify-center flex-col rounded-lg sm:w-[220px] w-full h-[65px] p-4'>
                      <p className='text-center font-bold md:text-base text-sm italic'>BioSciences</p>
                    <p className='text-center md:text-sm text-xs text-[#CBD5E0]'>Life Sciences & medicines</p>
                </div>
                <div className='bg-[#b08cff54] flex items-center justify-center flex-col rounded-lg sm:w-[220px] w-full h-[65px] p-4'>
                    <p className='text-center font-bold md:text-base text-sm  italic'>Chemistry & materials</p>
                    <p className='text-center md:text-sm text-xs text-[#CBD5E0]'>Chemical Sciences</p>
                </div>
                <div className='bg-[#00FF9F54] flex items-center justify-center flex-col rounded-lg sm:w-[220px] w-full h-[65px] p-4'>  <p className='text-center font-bold md:text-base text-sm  italic'>Physical Sciences </p>
                    <p className='text-center md:text-sm text-xs text-[#CBD5E0]'>Physics & mathematics</p></div>
                <div className='bg-[#FF57ED54] flex items-center justify-center flex-col rounded-lg sm:w-[220px] w-full h-[65px] p-4'>  <p className='text-center font-bold md:text-base text-sm  italic'>Engineering</p>
                    <p className='text-center md:text-sm text-xs text-[#CBD5E0]'>Applied Sciences</p></div>
            </div>
        </div>
      </div>   
        ]}/>
    </div>
  )
}
