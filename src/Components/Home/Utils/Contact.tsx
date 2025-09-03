
import Heading from '../../Utils/Text/Heading'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#2C3E50] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-2">

        <Heading heading='Contact Editorial Board' afterColor='#ffffff' textColor='white' class='after:mx-auto text-center mx-auto'>
        </Heading>

        <form className="space-y-2">
          <div>
            <label className="block text-white md:text-base text-sm mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white  text-black"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-white  md:text-base text-sm mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white  text-black md:text-base text-sm"
              placeholder="Enter your email address"
            />
          </div>
          
          <div>
            <label className="block text-white  md:text-base text-sm mb-2">Institution/Affiliation</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white  text-black md:text-base text-sm"
              placeholder="Enter your institution or affiliation"
            />
          </div>
          
          <div>
            <label className="block text-white  md:text-base text-sm mb-2">Message</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 rounded-lg border-0  text-black bg-white md:text-base text-sm"
              placeholder="Enter your message"
            />
          </div>
          
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#52B788]  text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-center font-georgia md:text-base text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
