

export default function FieldBox({heading,subHeading,bgColor}:{heading:string,subHeading:string,bgColor:string}) {
  return (
 <div
      className="flex items-center justify-center p-1 rounded-lg space-y-10 flex-col sm:aspect-[2/1] sm:py-0 py-10"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-white md:text-base text-sm italic text-center font-bold font-arial">
        {heading}
      </p>
      <p className="text-[#CBD5E0] md:text-sm text-xs text-center italic font-bold font-arial">
        {subHeading}
      </p>
    </div>
  )
}
