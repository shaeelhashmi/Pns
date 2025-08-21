
import Hero from '../../Header/Hero/Hero'
import HeroLeftBox from '../../Header/Hero/Util/HeroLeftBox'
import Heading from './Utils/Heading'
export default function SubmitArticleHero() {
  return (
    <div>
      <Hero Boxes={[<HeroLeftBox heading='Editorial policies & submission guidelines' content='Share your research with the global scientific community
through our rigorous peer-reviewed publication process' ButtonText='Start submission'></HeroLeftBox>,   <div className='w-full rounded-lg text-white  bg-[#6a6f7754] flex  items-center p-4  flex-col'>
        <div className='mx-auto'>
            <h3 className='text-2xl  font-bold font-georgia '>Journal Standards</h3>
            <Heading heading='Multi-stage' desc='Editorial screening'/>
            <Heading heading='HEC' desc='Recognized Journal'/>
            <Heading heading='COPE' desc='Ethic standards'/>
            <ul className='flex list-disc space-x-10 text-[#A0AEC0]'>
              <li>Integrity</li>
              <li>Quality</li>
              <li>Excellence</li>
            </ul>
        </div>
      </div>]}></Hero>
    </div>
  )
}
