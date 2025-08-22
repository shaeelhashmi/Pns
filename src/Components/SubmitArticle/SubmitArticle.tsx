import Heading from '../Utils/Text/Heading'
import Editorial from './Utils/Editorial'
import Integrity from './Utils/Integrity'
import Review from './Utils/Review'
import Conflict from './Utils/Conflict'
import Plagrism from './Utils/Plagrism'
import PublicationEthics from './Utils/PublicationEthics'
import QuickRefrence from './Utils/QuickRefrence'
export default function SubmitArticle() {
  return (
    <div>
        <div className="my-7 space-y-10">
              <Heading heading="Editorial Policies" />
              <Editorial/>
        </div>
         <div className="my-7 space-y-10">
              <Heading heading="Images Data & Integrity" />
              <Integrity/>
        </div>
           <div className="my-7 space-y-10">
              <Heading heading="Peer reviewed process" />
              <Review/>
        </div>
            <div className="my-7 space-y-10">
              <Heading heading="Conflict of interest" />
              <Conflict/>
        </div>
          <div className="my-7 space-y-10">
              <Heading heading="Plagrism policy" />
              <Plagrism/>
        </div>
           <div className="my-7 space-y-10">
              <Heading heading="Publication Ethics Committee" />
              <PublicationEthics/>
        </div>
         <div className="my-7 space-y-10">
              <Heading heading="Quick Refrence Guides" />
              <QuickRefrence/>
        </div>
          <div className="my-7 space-y-10">

              <a href='https://synexisjournal.com/online/index.php/synexis/submission' target='_blank' className=' w-[330px] h-[40px] flex justify-between items-center text-lg font-bold italic gap-4 bg-[#38A169] p-2 rounded-3xl mx-auto border-6 border-[#2f855a] text-white'>
                <div className='w-3 h-3 bg-[#1E56B6] rounded-full'></div>
               <div>Submit your article today</div> 
                 <div className='w-3 h-3 bg-[#1E56B6] rounded-full'></div></a>

        </div>
        
    </div>
  )
}
