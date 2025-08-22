

export default function EmojiCircle({ emoji }: { emoji: string }) {
  return (
      <span className="rounded-full  items-center p-4 bg-[#DAFBEA] inline mr-5 text-2xl w-fit h-fit">{emoji}</span>
  )
}
