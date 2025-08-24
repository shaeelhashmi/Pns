import Box from "../../Utils/Text/Box/Box"
import EmojiCircle from "./Box/EmojiCircle"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function Plagrism() {
  return (
     <Box >
              <div className="grid grid-cols-[auto_1fr]">
            <div>
                 <EmojiCircle emoji="📖" bgClass="bg-[#F8D4D4]"/>
            </div>
               
    
              <div className="space-y-2">
                <div>
                  <SubHeading subheading="Higher Education Commission of Pakistan Policy"  color="#064E3B" />
                </div>
                <div>
                    <Subtext description='Synexis adopts the plagiarism policy implemented by the Higher Education Commission of Pakistan.
As defined by Chambers Dictionary, a plagiarist is "one who steals the thoughts or writings of
others and gives them out as his own" - adding dishonesty when used for academic gain.'  size="text-lg"></Subtext>
                </div>
              <div className="p-4 bg-[#EBF3FE] border-[0.05px] rounded-md border-[#10B981]">
                      <p className="text-[0.95rem] text-[#2563EB] italic font-bold">Refrence Policy</p>
                       <a className="md:text-sm text-xs text-[#2563EB] break-all" href="  https://www.hec.gov.pk/english/policies/Pages/Plagiarism.aspx ">
                   https://www.hec.gov.pk/english/policies/Pages/Plagiarism.aspx 
                       </a>

                    </div>
              </div>
            
        </div>
            </Box>
  )
}