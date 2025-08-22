
import Hero from '../../Header/Hero/Hero'
import HeroLeftBox from '../../Header/Hero/Util/HeroLeftBox'
import Heading from './Utils/Heading'
export default function SubmitArticleHero() {
  return (
    <div>
      <Hero Boxes={[<HeroLeftBox heading='Editorial policies & submission guidelines' content='Share your research with the global scientific community
through our rigorous peer-reviewed publication process' ButtonText='Start submission'></HeroLeftBox>,   <div className='w-full rounded-lg text-white  bg-[#6a6f7754] flex  xl:items-center  md:px-20 sm:px-10 px-5 xl:px-0 py-7 flex-col'>
        <div className='xl:mx-auto mx-0 '>
            <h3 className='md:text-2xl text-lg  font-bold font-georgia '>Journal Standards</h3>
            <Heading heading='Multi-stage' desc='Editorial screening'/>
            <Heading heading='HEC' desc='Recognized Journal'/>
            <Heading heading='COPE' desc='Ethic standards'/>
            <ul className='flex list-disc space-x-10 text-[#A0AEC0] md:text-base text-sm'>
              <li>Integrity</li>
              <li>Quality</li>
              <li>Excellence</li>
            </ul>
        </div>
      </div>]}></Hero>
    </div>
  )
}
