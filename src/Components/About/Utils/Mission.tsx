
import SubHeading from '../../Utils/Text/SubHeading'
import Subtext from '../../Utils/Text/Subtext'

export default function Mission() {
  return (
    <div className="relative w-[100%] p-7 px-10  my-3  rounded-lg border-2 border-[#047957] [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)]">
      {/* Left border with gradient */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#047957] via-green-400 to-[#047957] rounded-l-lg" />
      <div className="space-y-2">
        <SubHeading subheading="Promoting Interdisciplinary Collaboration and Innovation" />
        <Subtext description="Synexis is committed to promoting interdisciplinary collaboration and innovation through the publication of high-quality, original research spanning all fields of science and engineering. Our mission is to bridge traditional boundaries, promote rigorous scholarship, and advance knowledge that shapes the future of technology, society, and the natural world." />
      </div>
    </div>
  )
}

