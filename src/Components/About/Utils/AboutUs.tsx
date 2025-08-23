import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import Box from "../../Utils/Text/Box/Box"
export default function AboutUs() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <Box >
<div className="space-y-2">
                <SubHeading subheading="The Etymology" />
                <Subtext description='The word "synexis" is derived from the Greek σύνεξις
(Synexis), which implies connection, union, or coming
together. It is a suitable title for an interdisciplinary
journal that seeks to integrate diverse fields of knowledge.
A quarterly, peer-reviewed, open-access publication
dedicated to sharing significant advances in basic
sciences, engineering, and allied disciplines.' size="text-lg" className="text-base" color="#4A5568" />
              </div>,

      </Box>
      <Box>
            <div className="space-y-2 ">
                <SubHeading subheading="Published by Pakistan Nuclear Society" />
                <Subtext description="The Pakistan Nuclear Society (PNS) is a non-governmental,
non-profit scientific organization established in 1990 and
registered under the Societies Registration Act of 1860.
registered under the Societies Registration Act of 1860.
PNS serves as a platform for professionals to promote
public understanding and encourage youth engagement
in various areas of scientific research." size="text-lg" className="text-base"  color="#4A5568"/>
              </div>
      </Box>
      
    </div>
  )
}
