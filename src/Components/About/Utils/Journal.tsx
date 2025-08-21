import SubHeading from "../../Utils/Text/SubHeading"
import Subtext from "../../Utils/Text/Subtext"
export default function Journal() {
  return (
        <>
               <div className="relative w-[100%] p-7 px-10  my-3   rounded-lg border-2 border-[#047957]  [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] ">
                    {/* Left border with gradient */}
                    <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
              
                    <div className="space-y-2 ">
                    <div className="inline  "><svg className="inline mr-5 -top-1 relative" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#10B981"/>
</svg>
</div>
                      <SubHeading subheading="Now Accepting Manuscripts for Inaugural Issue" className="inline"/>
                      <Subtext description="Synexis launched in 2024 with our first quarterly issue. We invite researchers and scholars
from all scientific disciplines to contribute to this exciting new platform for interdisciplinary research." size="text-lg" color="#4A5568"/>
                    </div>
                  </div>
    </>
  )
}
