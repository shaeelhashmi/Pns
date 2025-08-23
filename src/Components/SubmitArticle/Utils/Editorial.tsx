import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import Box from "../../Utils/Text/Box/Box"
import EmojiCircle from "./Box/EmojiCircle"
export default function Editorial() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
    <Box className="lg:col-span-2">
            <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="✍️" />
                    </div>
       <div className="space-y-2">
        <div>
        <SubHeading subheading="Authorship requirements" className="inline" color="#064E3B"/>
    </div>
        <div>
          <ul className="list-none xl:ml-5 md:ml-3 ml-1">
            <li> <Subtext description="• Manuscripts must be written in English" size="text-lg" className="text-base"/></li>
            <li> <Subtext description="• Each author must have made significant contributions to the work" size="text-lg" className="text-base"/></li>
            <li> <Subtext description="• Authors are responsible for accuracy and integrity of their contributions" size="text-lg" className="text-base"/></li>
            <li> <Subtext description="• All listed authors must review and approve the final manuscript" size="text-lg"className="text-base" /></li>
            <li> <Subtext description="• Corresponding author verifies compliance with transparency standards" size="text-lg" className="text-base"/></li>
            <li> <Subtext description="• All authors receive email confirmation request upon submission" size="text-lg" className="text-base"/></li>
            <li> <Subtext description="• Contributors not meeting authorship criteria should be acknowledged separately" size="text-lg" className="text-base"/></li>
          </ul>
          </div>
         <p className="font-arial font-bold italic md:text-2xl text-lg">⚠️ Changes to authorship require written approval from all original authors</p>
       </div>
        
        </div>
        
    </Box>
    <Box>
           <div className="grid grid-cols-[auto_1fr] ">
    <div>
        <EmojiCircle emoji="⭐" bgClass="bg-[#DCC4FC]"/>
        </div>
        <div className="space-y-2">
        <div>
        <SubHeading subheading="Corresponding author duties" className="inline" color="#064E3B"/>
        </div>
        
        <div>
            <ul className="list-none xl:ml-5 md:ml-3 ml-1">
                <li> <Subtext description="✓ Ensure all authors review and approve final manuscript" size="text-lg" className="text-base"/></li>
                <li> <Subtext description="✓ Include email addresses with affiliations" size="text-lg" className="text-base"/></li>
                <li> <Subtext description="✓ Receive all journal correspondence" size="text-lg" className="text-base"/></li>
                <li> <Subtext description="✓ Verify data, materials, and code standards" size="text-lg" className="text-base"/></li>
                <li><Subtext description="✓ Ensure group compliance with best practices" size="text-lg" className="text-base"/></li>
                <li><Subtext description="✓ Facilitate communication among authors" size="text-lg" className="text-base"/></li>
            </ul>
        </div>
        <div>
            <button className="bg-[#FEF5E7] w-[180px] h-[30px] italic text-center text-[#D97706] font-arial text-[0.81rem] font-bold rounded-md border-2 border-[#F59E0B]  cursor-pointer">Primary point of contact</button>
        </div>
        </div>
        </div>

    </Box>
    <Box >
            
        <div className="grid grid-cols-[auto_1fr] ">
    <div>
        <EmojiCircle emoji="⚠️" bgClass="bg-[#F8D4D4]"/>
</div>
        <div className="space-y-2">
            <div>
        <SubHeading subheading="Authorship Changes" className="inline" color="#064E3B"/>
        </div>
       
        <div className="">
            <Subtext description="Any changes to authorship will require" className="inline text-base"size="text-lg"  />
            <ul className="list-none xl:ml-5 lg:ml-3 ml-1">
                <li> <Subtext description=" • Written approval from ALL originally listed authors" size="text-lg"className="text-base" /></li>
                <li> <Subtext description=" • Addition or removal of authors"size="text-lg" className="text-base" /></li>
                <li> <Subtext description=" • Changes to author order"size="text-lg" className="text-base" /></li>

            </ul>
           
        </div>
         <div className="bg-[#FDF4F4]  xl:px-4 lg:px-2 px-1 py-2">
                <p className="text-[#DC2626] font-arial md:text-[0.95rem] text-[0.8rem] bold italic  font-bold">Important Notice:</p>
                <p className="xl:ml-30 lg:ml-20 ml-5 text-[#4A5568] md:text-[0.95rem] text-[0.8rem] ">If any author does not provide approval for
submission, the manuscript will be rejected.</p>
            </div>
        </div>
         </div>

    </Box>
    </div>

  )
}
