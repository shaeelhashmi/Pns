export default function QuestionBox({ Question }: { Question: string }) {
  return (
    <div className="bg-white sm:w-3/4 w-full mx-auto p-5 rounded-2xl flex space-x-4 items-center">
        <div className="h-10 bg-[#40916C] w-1"></div>
        <div className="w-2 h-2 bg-[#40916C] rounded-full"></div>
      <p className="font-georgia sm:text-base text-sm font-bold text-[#1B4332]">{Question}</p>
    </div>
  )
}
