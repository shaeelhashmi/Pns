import QuestionBox from "./Box/QuestionBox"
export default function Faqs() {
  return (
    <div className="bg-[#E8F5E8] p-7 md:px-10 sm:px-5 pl-5 ">

      <h1 className="md:text-[2.5rem] sm:text-4xl text-3xl text-center font-georgia">Frequently Asked Questions</h1>
      <div className='m-5  md:mx-13   mx-3 space-y-2'>
        <QuestionBox Question="How do I submit environmental research for publication?" />
        <QuestionBox Question="What is the peer review process for climate research?" />
        <QuestionBox Question="How can I access the environmental research archives?" />
        <QuestionBox Question="What are the guidelines for sustainable research ethics?" />
      </div>
    </div>
  )
}
