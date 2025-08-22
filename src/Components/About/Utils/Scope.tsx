import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
import Box from "../../Utils/Text/Box/Box"
export default function Scope() {
  return (
    <>
    <Box>
            <>
      
          <div className="space-y-2">
            <SubHeading subheading="Research Categories and Submission Types" />
            <Subtext description="Synexis invites original research manuscripts in English, spanning natural sciences, medical research,
engineering, and allied sciences. We welcome original research articles, systematic reviews, technical
reports, and qualitative studies that adhere to rigorous methodological frameworks.
knowledge that shapes the future of technology, society, and the natural world.
 " />
 <p className="my-2 text-2xl font-georgia text-[#374151]">Submissions are considered under four main categories: </p>
          </div>
           <div className="flex flex-wrap items-center justify-around  space-y-3">
          <div className="my-2 text-2xl  font-bold italic font-arial p-1 px-4 rounded-md text-white" style={{background:"linear-gradient(95deg, #1F2937 0%, #064E3B 100%)"}}> Bio Sciences</div>
          <div className="my-2 text-2xl  font-bold italic font-arial p-1 px-4 rounded-md text-white" style={{background:"linear-gradient(95deg, #1F2937 0%, #064E3B 100%)"}}> Chemistry & material Sciences</div>
          <div className="my-2 text-2xl  font-bold italic font-arial p-1 px-4 rounded-md text-white" style={{background:"linear-gradient(95deg, #1F2937 0%, #064E3B 100%)"}}> Physical Sciences</div>
          <div className="my-2 text-2xl  font-bold italic font-arial p-1 px-4 rounded-md text-white" style={{background:"linear-gradient(95deg, #1F2937 0%, #064E3B 100%)"}}> Engineering</div>
        </div>
      </>
    </Box>

       
        </>
  )
}
