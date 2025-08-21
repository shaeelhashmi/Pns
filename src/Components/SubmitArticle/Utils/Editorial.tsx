import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function Editorial() {
  return (
      <div className="bg-white relative w-[100%] p-7 px-10  my-3  rounded-lg border-2 border-[#047957] [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
        {/* Left border with gradient */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
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
      </div>
  )
}
