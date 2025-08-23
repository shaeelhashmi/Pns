import Box from "../../Utils/Text/Box/Box"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import  EmojiCircle from "./Box/EmojiCircle"
export default function Conflict() {
  return (

    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10">
        <Box className="xl:col-span-3 lg:col-span-2">
            <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="⚖️" bgClass="bg-[#FCE2B6]"/>
                </div>
                <div className="space-y-2">
                    <div>   
                        <SubHeading subheading="Required Disclosures" color="#064E3B"/>
                    </div>
                    <div>
                        <Subtext description="Each author must disclose affiliations, funding sources, and competing interests for research,
reviews, and opinion-type articles. This policy ensures transparency and maintains editorial integrity."  size="text-lg"></Subtext>
                    </div>
                    <div>
                        <Subtext description="A competing interest exists when professional judgment could be influenced by other interests"  size="text-lg" color="#D97706" className="italic font-bold"></Subtext>
                    </div>
                </div>
            </div>
        </Box>
        <Box>
            <div className="space-y-3">
            <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="🏢" />
                </div>
                <div className="space-y-2">
                    <div>
                        <SubHeading size="lg" subheading="1. Institutional Affiliations" />
                    </div>
                    <div>
                    
                        <Subtext description="Title page must include for all authors:"  size="text-lg"></Subtext>
                       <ul className="xl:ml-5 lg:ml-3 ml-1">
                        <li><Subtext description="• Academic affiliations"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Corporate affiliations"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Government institutions"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Industry connections"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Other relevant institutions "  size="text-lg"></Subtext></li>
                    </ul>
                    </div>
                    <div className="p-4 bg-[#E7F8F2] border-[0.05px] rounded-md border-[#10B981]">
                      <p className="md:text-[0.95rem] text-sm text-[#047857] italic font-bold">Note</p>
                       <p className="md:text-sm text-[0.8rem]  text-[#374151]">
                           List institutions where the work was performed
                       </p>

                    </div>

                </div>
            </div>
            <div className="grid grid-cols-[auto_1fr]">
                    <div>
                        <EmojiCircle emoji="💰"/>
                    </div>
                    <div className="space-y-2">
                        <SubHeading subheading="2. Funding & Contributions" size="lg"/>
                        <Subtext description="Complete financial contribution 
disclosure required"  size="text-lg"></Subtext>

                    </div>
            </div>
            </div>
        </Box>
           <Box>
   
            <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="💳" />
                </div>
                <div className="space-y-2">
                    <div>
                        <SubHeading size="lg" subheading="3. Financial Interests" />
                    </div>
                    <div>
                    
                        <Subtext description="Include but not limited to:"  size="text-lg"></Subtext>
                       <ul className="xl:ml-5 lg:ml-3 ml-1">
                        <li><Subtext description="• Patents (awarded, planned, 
pending)"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Individual applications from 
institutions"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Paid employment or consultancy"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Advisory committee payments"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Board membership compensation "  size="text-lg"></Subtext></li>
                    </ul>
                    </div>
                    <div className="p-4 bg-[#FEFAF3] border-[0.05px] rounded-md border-[#F59E0B]">
                      <p className="md:text-[0.95rem] text-base text-[#D97706] italic font-bold">Key Requirement:</p>
                       <p className="md:text-sm text-[0.8rem]  text-[#374151]">
                           Must relate to the subject matter of
the manuscript contribution
for disclosure requirement
                       </p>

                    </div>

                </div>
            </div>
          
        </Box>
             <Box>
   
            <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="💳" />
                </div>
                <div className="space-y-2">
                    <div>
                        <SubHeading size="lg" subheading="4. Non-Financial Interests" />
                    </div>
                    <div>
                    
                        <Subtext description="May impact objectivity:"  size="text-lg"></Subtext>
                       <ul className="xl:ml-5 lg:ml-3 ml-1">
                        <li><Subtext description="• Expert witness roles"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Government advisory board 
   membership"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Paid employment or consultancy"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Advisory committee payments"  size="text-lg"></Subtext></li>
                        <li><Subtext description="• Board membership compensation "  size="text-lg"></Subtext></li>
                    </ul>
                    </div>
                    <div className="p-4 bg-[#F9F7FF] border-[0.05px] rounded-md border-[#8B5CF6]">
                      <p className="md:text-[0.95rem] text-sm text-[#7C3AED] italic font-bold">Transparency Goal</p>
                       <p className="md:text-sm text-[0.8rem]  text-[#374151]">
                    Must relate to the subject matter of
bias or influence on research
conclusions and interpretations
                       </p>

                    </div>

                </div>
            </div>
          
        </Box>
        
        
      
    </div>
  )
}
