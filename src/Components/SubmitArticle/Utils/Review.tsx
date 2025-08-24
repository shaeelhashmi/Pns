import Box from "../../Utils/Text/Box/Box"
import EmojiCircle from "./Box/EmojiCircle"
import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function Review() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10">
        <Box className="xl:col-span-3 lg:col-span-2 col-span-1">
          <div className="grid grid-cols-[auto_1fr]">
        <div>
             <EmojiCircle emoji="✍️" bgClass="bg-[#C4DAFC]"/>
        </div>
           

          <div className="space-y-2">
            <div>
              <SubHeading subheading="Multi-stage editorial process"  color="#064E3B" />
            </div>
            <div>
                <Subtext description="Synexis employs a rigorous multi-stage editorial screening and assessment process:"  size="text-lg"></Subtext>
            </div>
            <div>
                <ul className="list-none">
                    <li><Subtext description="1. Initial Quality Check: " color="#0606BD" className="italic font-bold inline" size="text-lg"></Subtext><Subtext className=" inline" description="Competing interests, ethical compliance, financial disclosures." size="text-lg" ></Subtext></li>
                    <li><Subtext description="2. Editorial Board Review: " color="#0606BD" className="italic font-bold inline" size="text-lg"></Subtext><Subtext className="inline"  description="Peer review assignment and final decision making." size="text-lg"></Subtext></li>
                </ul>
            </div>
          </div>
                    </div>
        </Box>
      <Box className="lg:col-span-2 xl:col-span-1 col-span-1">
  
            < >
              <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <div>
                    <EmojiCircle emoji="✓" colorClass="text-[#16A34A]" bgClass="bg-[#BDEECF]"/>
                    </div>
                </div>
                <div className="space-y-2">
                <div>
                    <SubHeading subheading="Accept" size="lg"  color="#064E3B" />
                
                </div>
                <div>
                        <Subtext description="Manuscript meets all standards
and is accepted for publication" size="text-lg"  color="#374151"/>
                </div>
                </div>
                </div>
                <div className="grid grid-cols-[auto_1fr]">
                    <div>
                    <div><EmojiCircle emoji="✏️" bgClass="bg-[#FCE2B6]"/>
                </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <SubHeading subheading="Revise" size="lg" color="#064E3B" />
                    </div>
                    <div>
                        <Subtext description="Authors invited to address
reviewer comments"  size="text-lg" color="#374151"/>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_1fr]">
                <div>
                    <EmojiCircle emoji="✗" colorClass="text-[#DC2626]" bgClass="bg-[#F5BEBE]"/>
                </div>
                <div className="space-y-2">
                    <div>
                        <SubHeading subheading="Reject" size="lg" color="#064E3B" />
                    </div>
                    <div>
                        <Subtext description="Submitted manuscripts are rejected after not passing the review process"  size="text-lg" color="#374151"/>
                    </div>
                </div>
                </div>

            </>

      </Box>
      <Box>
        <div className="grid grid-cols-[auto_1fr]">
            <div>
                    <EmojiCircle emoji="📋"/>

            </div>
            <div className="space-y-2">
              <div>
                <SubHeading subheading="Publication Standards" size="lg" color="#064E3B" />
              </div>
              <div>
                <Subtext description="Research must comply with
internationally accepted standards
for research practice and reporting"  size="text-lg"></Subtext>
              </div>
              <div>
                <SubHeading subheading="Post-Publication Issues:" size="lg" color="#047857" className="italic"></SubHeading>
              </div>
              <div>
                <Subtext description="Addressed per COPE guidelines may result in correction,
retraction, or expression of concern"  size="text-lg"></Subtext>
              </div>
            </div>
        </div>
      </Box>
      <Box>
        <div className="grid grid-cols-[auto_1fr]">
          <div>
            <EmojiCircle emoji="🌐" colorClass="text-[#2563EB]" bgClass="bg-[#C4DAFC]"/>
          </div>
          <div className="space-y-2">
            <div>
              <SubHeading subheading="Online Publication" size="lg" color="#064E3B" />
            </div>
            <div>
              <Subtext description="Accepted manuscripts are
published on the journal website
for immediate access"  size="text-lg"></Subtext>
            </div>
            <div>
              <SubHeading subheading="Institutional Contact:" size="lg" color="#047857" />
            </div>
            <div>
              <Subtext description="Authors' institutions contacted
when appropriate for
ethical or policy matters"  size="text-lg"></Subtext>
            </div>

          </div>

        </div>
      </Box>
    </div>
  )
}
