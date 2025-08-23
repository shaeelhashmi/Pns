
import Nav from './Nav'
export default function Top() {
  return (
    <nav className=''>
    <div className="bg-[#2D3748] p-2 text-white text-center font-arial">
      <p className='md:text-base text-sm'>Synexis research Portal- Synergy of Sciences</p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2  place-content-center items-center justify-center m-5 md:mx-13 mx-3  gap-5'>
    <div>
        <p className='font-bold md:text-6xl text-5xl my-2  font-georgia max-sm:text-4xl'>Synexis Journal</p>
        <p className='md:text-2xl text-xl italic font-georgia max-sm:text-lg'> Journal of Research in Science and Engineering</p>
        <p className='md:text-sm text-xs font-arial'>HEC Recognized | Multi-stage Editorial Review | Since 2018</p>
      </div>
      <div className='relative'>
        <div className='flex justify-end'>
        <input className=' w-[100%] md:px-20 px-10 md:text-base text-sm max-sm:px-4  py-3 border-[#CBD5E0] border-2' placeholder='Search author,articles,Keywords'></input>
        <button className='absolute  bottom-[14%] mt-4 mr-4 bg-[#38A169] text-white p-1 rounded-lg'>Search</button>
        </div>
      </div>
    </div>
    <Nav />
    </nav>
  )
}