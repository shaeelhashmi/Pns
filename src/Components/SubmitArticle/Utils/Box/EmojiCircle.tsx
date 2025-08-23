export default function EmojiCircle({
  emoji,
  colorClass,
  sizeClass,
  bgClass,
  className,
  textSize
}: { emoji: string; colorClass?: string; sizeClass?: string; bgClass?: string; className?: string; textSize?: string }) {
  return (
    <span
      className={`rounded-full inline-flex items-center justify-center ${bgClass || "bg-[#DAFBEA]"} ${colorClass || ""} ${sizeClass || "md:w-11 md:h-11 w-9 h-9"} md:mr-5 mr-2 ${textSize || "md:text-lg text-base"} ${className || ""}`}
    >
      {emoji}
    </span>
  )
}
