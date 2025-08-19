import SubHeading from "./Text/SubHeading"
import Subtext from "./Text/Subtext"
export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 gap-10">
            <div className="relative w-[100%] p-7 px-10  my-3   rounded-lg border-2 border-[#047957] [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* Left border with gradient */}
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
        
              <div className="space-y-2">
                <SubHeading subheading="The Etymology" />
                <Subtext description='The word "synexis" is derived from the Greek σύνεξις
(Synexis), which implies connection, union, or coming
together. It is a suitable title for an interdisciplinary
journal that seeks to integrate diverse fields of knowledge.
A quarterly, peer-reviewed, open-access publication
dedicated to sharing significant advances in basic
sciences, engineering, and allied disciplines.' size="text-lg"  color="#4A5568"/>
              </div>
            </div>
                <div className="relative w-[100%] p-7 px-10  my-3   rounded-lg border-2 border-[#047957]  [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* Left border with gradient */}
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
        
              <div className="space-y-2 ">
                <SubHeading subheading="Published by Pakistan Nuclear Society" />
                <Subtext description="The Pakistan Nuclear Society (PNS) is a non-governmental,
non-profit scientific organization established in 1990 and
registered under the Societies Registration Act of 1860.
registered under the Societies Registration Act of 1860.
PNS serves as a platform for professionals to promote
public understanding and encourage youth engagement
in various areas of scientific research." size="text-lg" color="#4A5568"/>
              </div>
            </div>
      
    </div>
  )
}
