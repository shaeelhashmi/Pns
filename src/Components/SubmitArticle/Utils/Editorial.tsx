import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import Box from "../../Utils/Text/Box/Box"
export default function Editorial() {
  return (
    <Box Boxes={
        <>
         <div className="space-y-6">
            <div>
        <span className="rounded-full  items-center p-4 bg-[#DAFBEA] inline mr-5 text-2xl">✍️</span>
        <SubHeading subheading="Authorship requirements" className="inline" />
        </div>
        <div>
          <ul className="list-disc ml-20">
            <li> <Subtext description="Manuscripts must be written in English" /></li>
            <li> <Subtext description="Each author must have made significant contributions to the work" /></li>
            <li> <Subtext description="Authors are responsible for accuracy and integrity of their contributions" /></li>
            <li> <Subtext description="All listed authors must review and approve the final manuscript" /></li>
            <li> <Subtext description="Corresponding author verifies compliance with transparency standards" /></li>
            <li> <Subtext description="All authors receive email confirmation request upon submission" /></li>
            <li> <Subtext description="Contributors not meeting authorship criteria should be acknowledged separately" /></li>
          </ul>
          </div>
         
        </div>
        </>
    }></Box>

  )
}
