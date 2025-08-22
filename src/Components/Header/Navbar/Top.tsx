
import Nav from './Nav'
export default function Top() {
  return (
    <nav className=''>
    <div className="bg-[#2D3748] p-2 text-white text-center font-arial">
      <p>Synexis research Portal- Synergy of Sciences</p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2  place-content-center items-center justify-center m-5 ml-13 gap-5'>
    <div>
        <p className='font-bold text-6xl my-2  font-georgia'>Synexis Journal</p>
        <p className='text-2xl italic font-georgia'> Journal of Research in Science and Engineering</p>
        <p className='text-sm font-arial'>HEC Recognized | Multi-stage Editorial Review | Since 2018</p>
      </div>
      <div className='relative'>
        <div className='flex justify-end'>
        <input className=' w-[100%] px-20 py-3 border-[#CBD5E0] border-2' placeholder='Search author,articles,Keywords'></input>
        <button className='absolute  bottom-[14%] mt-4 mr-4 bg-[#38A169] text-white p-1 rounded-lg'>Search</button>
        </div>
      </div>
    </div>
    <Nav />
    </nav>
  )
}