import EmojiCircle from "./Box/EmojiCircle"
import Box from "../../Utils/Text/Box/Box"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function QuickRefrence() {
  return (
    <div className='grid grid-cols-2 gap-10'>
          <Box >
                  
              <div className="grid grid-cols-[auto_1fr] ">
          <div>
              <EmojiCircle emoji="✓" bgClass="bg-[#BDEECF]" colorClass="text-[#16A34A]"/>
      </div>
              <div className="space-y-2">
                  <div>
              <SubHeading subheading="Before Submission Checklist"  color="#064E3B"/>
              </div>
             
              <div className="">
                  <ul className="list-none ml-5">
                      <li> <Subtext description="✔ Manuscript written in English" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="✔ All authors have approved final version" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="✔ Conflicts of interest disclosed" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="✔ Ethics approvals documented" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="✔ Images represent original data accurately" size="text-lg" font="arial" className="inline"/></li>
      
                  </ul>
                 
              </div>

              </div>
               </div>
      
          </Box>
           <Box >
                  
              <div className="grid grid-cols-[auto_1fr] ">
          <div>
              <EmojiCircle emoji="⚠️" bgClass="bg-[#FCE2B6]" colorClass="text-[#16A34A]"/>
      </div>
              <div className="space-y-2">
                  <div>
              <SubHeading subheading="Important Reminders"  color="#064E3B"/>
              </div>
             
              <div className="">
                  <ul className="list-none ml-5">
                      <li> <Subtext description="• AI-generated images require prior approval" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="• Any authorship changes need written approval" size="text-lg" font="arial" className="inline"/></li>
                      <li> <Subtext description="• Post-publication issues follow COPE guidelines" size="text-lg" font="arial" className="inline"/></li>
                  </ul>
                 
              </div>
              </div>
               </div>
      
          </Box>
    </div>
  )
}
