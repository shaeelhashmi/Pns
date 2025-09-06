import Hero from "../../Header/Hero/Hero";
import HeroLeftBox from "../../Header/Hero/Util/HeroLeftBox";

export default function HomeHero() {
  return (
    <Hero Boxes={[ <HeroLeftBox heading="Advancing environmental Science through research" content="Publishing peer-reviewed research on climate change,
biodiversity, pollution control, and sustainable development" ButtonText="Browse articles" link="#top"/>,
      
       <div className='w-full rounded-lg text-white bg-[#6a6f7754] flex flex-col items-center px-6 py-10'>
  <h3 className='md:text-2xl text-lg font-bold font-georgia mb-4'>Our Goal</h3>
  <p className='text-[#CBD5E0] font-arial md:text-lg text-base'>
    To foster an open, interdisciplinary space where science and engineering connect. 
    We aim to support <span className='font-semibold text-white'>innovation</span>, 
    encourage <span className='font-semibold text-white'>collaboration</span>, 
    and ensure <span className='font-semibold text-white'>rigor</span> in research 
    that drives meaningful <span className='font-semibold text-white'>impact</span>.
  </p>
  <ul className='mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm md:text-base text-center text-[#A0AEC0]'>
    <li className='bg-[#2365ffaa] rounded-lg py-3 px-2 md:text-base text-sm font-semibold text-white'>Innovation</li>
    <li className='bg-[#00ff9daa] rounded-lg py-3 px-2 md:text-base text-sm font-semibold text-white'>Collaboration</li>
    <li className='bg-[#b08cffaa] rounded-lg py-3 px-2 md:text-base text-sm font-semibold text-white'>Rigor</li>
    <li className='bg-[#FF57EDaa] rounded-lg py-3 px-2 md:text-base text-sm font-semibold text-white'>Impact</li>
  </ul>
</div>
  
    ]}>
    </Hero>
  )
}
