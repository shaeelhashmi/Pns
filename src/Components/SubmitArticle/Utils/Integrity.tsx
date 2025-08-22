import Box from "../../Utils/Text/Box/Box"
import EmojiCircle from "./Box/EmojiCircle"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function Integrity() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Box className="col-span-2">
                <div className="grid grid-cols-[auto_1fr]">
          <div>
            <EmojiCircle emoji="✍️"  bgClass="bg-[#F8D4D4]"/>
          </div>
          <div className="space-y-2">
            <div>
              <SubHeading subheading="Plagiarism Policy"  color="#064E3B" />
            </div>
            <div>
              <Subtext description="Plagiarism is defined as theft or misappropriation of intellectual property and substantial, unattributed copying 
of another's work. This includes both external plagiarism and self-plagiarism." size="text-lg" />
            </div>
            <div>
                <Subtext description="Detection & investigation" color="#DC2626" className="font-bold italic" size="text-lg" font="arial"></Subtext>
            <div></div>
            <div className="ml-5">
                <ul>
                    <li><Subtext description="• Authors are responsible for accuracy and integrity of their contributions" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="• All listed authors must review and approve the final manuscript" size="text-lg" font="arial" color="#374151"/></li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </Box>
      <Box>
        <div className="grid grid-cols-[auto_1fr]">
        <div>
            <EmojiCircle emoji="🤖" bgClass="bg-[#FCE2B6]"/>
        </div>
        <div className="space-y-2">
            <div>
                <SubHeading subheading="AI-Generated Content"  color="#064E3B"  />
            </div>
            <div>
                <Subtext description="Multimedia & Images" color="#D97706" font="arial" size="text-lg" className="font-bold italic"/>
            </div>
            <div>
                <Subtext description="AI-generated images and multimedia are " size="text-lg" font="arial" color="#374151" className="inline"/>
                <Subtext description="NOT PERMITTED " size="text-lg" font="arial" className="inline font-bold italic" color="#DC2626"/>
                <Subtext description="without explicit prior approval" size="text-lg" font="arial" color="#374151" className="inline"/>
            </div>
            <div>
                <Subtext description="Exceptions:" size="text-lg" font="arial" color="#047857" className="font-bold italic"/>
            </div>
            <div className="ml-5">
                <ul>
                    <li><Subtext description="• Manuscripts focusing on AI/ML research" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="• Must be disclosed at time of submission" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="• Considered case-by-case basis" size="text-lg" font="arial" color="#374151"/></li>

                </ul>
            </div>
            <div>
                <p className="text-[#6B7280] font-arial font-bold italic text-[0.95rem]"> Policies subject to revision based on copyright law developments</p>
            </div>
        </div>
      </div>
      </Box>
      <Box>
         <div className="grid grid-cols-[auto_1fr]">
            <div>
            <EmojiCircle emoji="📊" />
            </div>
            <div className="space-y-2">
            <div>
                <SubHeading subheading="Image Requirements"  color="#064E3B"  />
            </div>
            <div>
                <Subtext description="All images included in manuscripts must:" size="text-lg" font="arial" color="#374151"/>
            </div>
            <div>
                <ul className="ml-5">
                    <li><Subtext description="✓ Accurately represent the original data" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="✓ Be of high quality and resolution" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="✓ Include proper attribution if from external sources" size="text-lg" font="arial" color="#374151"/></li>
                    <li><Subtext description="✓ Follow ethical guidelines for data presentation" size="text-lg" font="arial" color="#374151"/></li>
                </ul>
            </div>
            <div className="border-[0.5px] border-[#10B981] bg-[#E7F8F2] py-1 rounded-md mt-20">
                <p className="text-[0.95rem] text-[#047857] font-bold italic font-arial text-center">No manipulation beyond standard enhancement</p>
            </div>
            </div>
        </div>
      </Box>
    </div>
  )
}
