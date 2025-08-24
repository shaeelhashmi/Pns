import  Box from "../../Utils/Text/Box/Box"
import EmojiCircle from "./Box/EmojiCircle"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import CopeMember from "./Box/CopeMember"
export default function PublicationEthics() {
  return (
    <Box className="col-span-3">
              <div className="grid grid-cols-[auto_1fr]">
            <div>
              <EmojiCircle emoji="👥" />
            </div>
               
    
              <div className="space-y-2">
                <div>
                  <SubHeading subheading="Committee on Publication Ethics (COPE)"  color="#064E3B" />
                </div>
                <div>
                    <Subtext description='The committee meets (in person or online) whenever a case is referred for scrutiny.'  size="text-lg"></Subtext>
                </div>
             <div className="grid xl:grid-cols-4 md:grid-cols-2 xl:gap-10 gap-5  pr-2">
                <CopeMember emoji="JA" name="Javed Akhtar" role="Chief editor(Chemistry,material sciences)" subrole="Ethics Specialist"/>
                <CopeMember emoji="MNK" name="Muhammad Nasir Khan" role="Chief editor(Physics)" subrole="Research integrity"/>
                <CopeMember emoji="SH" name="Sohail Hameed" role="Chief editor(BioSciences)" subrole="Publication Standards"/>
                <CopeMember emoji="SK" name="Shahab Khushnood" role="Chief editor(Engineering)" subrole="Editorial oversight"/>
             </div>
              </div>
            
        </div>
            </Box>
  )
}
