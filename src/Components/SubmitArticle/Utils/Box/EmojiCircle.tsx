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
      className={`rounded-full inline-flex items-center justify-center ${bgClass || "bg-[#DAFBEA]"} ${colorClass || ""} ${sizeClass || "w-11 h-11"} mr-5 ${textSize || "text-lg"} ${className || ""}`}
    >
      {emoji}
    </span>
  )
}
