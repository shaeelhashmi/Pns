
import { Link } from "react-router-dom"
export default function Footer() {
  return (
        <footer className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16 md:px-13 px-3" style={{background: "linear-gradient(90deg, #1F2937 0%, #064E3B 100%)"}}>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Synexis Journal Section */}
          <div className="lg:col-span-1">
            <h2 className="md:text-[2.5rem] text-4xl font-bold mb-4 font-georgia">Synexis Journal</h2>
            <p className="text-gray-200 leading-relaxed md:text-[1.3rem] text-[1.05rem]">
              Advancing knowledge through rigorous research and scholarly excellence since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 md:text-2xl text-xl font-georgia">Quick Links</h3>
            <ul className="space-y-3 md:text-base text-sm transition-colors duration-200 block font-georgia">
              <li>
                <a 
                  href="https://synexisjournal.com/online/index.php/synexis/submission" 
                  className=""
                >
                  Submit Research
                </a>
              </li>
              <li>
                <Link 
                  to="/guidelines" 

                >
                  Editorial Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Research Areas</h3>
            <ul className="space-y-3 md:text-base text-sm transition-colors duration-200 block font-georgia">
                <li >
                    Life Sciences
                </li>
                <li >
                    Earth Sciences
                </li>
                <li >
                    Physical Sciences
                </li>
                <li >
                    Social Sciences
                </li>
            </ul>

          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-3 md:text-base text-sm transition-colors duration-200 block font-georgia">
              <p>
                <span>Editorial Office:</span> +1 (555) 123-4567
              </p>
              <p>
                <span >Email:</span>{' '}
                <a 
                  href="mailto:editor@synexisjournal.org" 
                  className="hover:text-white transition-colors duration-200"
                >
                  editor@synexisjournal.org
                </a>
              </p>
              <p>
                <span>Address:</span> 123 University Ave
              </p>
              <p className="mb-6">Academic City, AC 12345</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M22 12.8248C22 7.26818 17.5229 2.76367 12 2.76367C6.47715 2.76367 2 7.26818 2 12.8248C2 17.8465 5.65684 22.0089 10.4375 22.7637V15.7331H7.89844V12.8248H10.4375V10.6082C10.4375 8.08663 11.9305 6.69379 14.2146 6.69379C15.3088 6.69379 16.4531 6.8903 16.4531 6.8903V9.36628H15.1922C13.95 9.36628 13.5625 10.1419 13.5625 10.9376V12.8248H16.3359L15.8926 15.7331H13.5625V22.7637C18.3432 22.0089 22 17.8467 22 12.8248Z" fill="black"/>
</svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M14.1761 0.763672H16.9362L10.9061 7.54107L18 16.7637H12.4456L8.0951 11.1703L3.11723 16.7637H0.35544L6.80517 9.51447L0 0.763672H5.69545L9.6279 5.87629L14.1761 0.763672ZM13.2073 15.1391H14.7368L4.86441 2.30295H3.2232L13.2073 15.1391Z" fill="black"/>
</svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.76367C3.67157 3.76367 3 4.43524 3 5.26367V20.2637C3 21.0921 3.67157 21.7637 4.5 21.7637H19.5C20.3284 21.7637 21 21.0921 21 20.2637V5.26367C21 4.43524 20.3284 3.76367 19.5 3.76367H4.5ZM8.52076 7.76639C8.52639 8.72264 7.81061 9.31186 6.96123 9.30764C6.16107 9.30342 5.46357 8.66639 5.46779 7.7678C5.47201 6.92264 6.13998 6.24342 7.00764 6.26311C7.88795 6.2828 8.52639 6.92827 8.52076 7.76639ZM12.2797 10.5254H9.75971H9.7583V19.0853H12.4217V18.8856C12.4217 18.5057 12.4214 18.1257 12.4211 17.7456C12.4203 16.7318 12.4194 15.7169 12.4246 14.7034C12.426 14.4573 12.4372 14.2014 12.5005 13.9665C12.7381 13.089 13.5271 12.5223 14.4074 12.6616C14.9727 12.7501 15.3467 13.0778 15.5042 13.6108C15.6013 13.944 15.6449 14.3026 15.6491 14.65C15.6605 15.6976 15.6589 16.7452 15.6573 17.7929C15.6567 18.1627 15.6561 18.5327 15.6561 18.9025V19.0839H18.328V18.8786C18.328 18.4266 18.3278 17.9747 18.3275 17.5228C18.327 16.3933 18.3264 15.2638 18.3294 14.1339C18.3308 13.6234 18.276 13.12 18.1508 12.6264C17.9638 11.8923 17.5771 11.2848 16.9485 10.8461C16.5027 10.5339 16.0133 10.3328 15.4663 10.3103C15.404 10.3077 15.3412 10.3043 15.2781 10.3009C14.9984 10.2858 14.7141 10.2704 14.4467 10.3243C13.6817 10.4776 13.0096 10.8278 12.5019 11.4451C12.4429 11.5159 12.3852 11.5878 12.2991 11.6951L12.2797 11.7194V10.5254ZM5.68164 19.0881H8.33242V10.531H5.68164V19.0881Z" fill="black"/>
</svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="Dribbble"
                >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.521C7.03145 3.521 3 7.55245 3 12.521C3 17.4896 7.03145 21.521 12 21.521C16.9588 21.521 21 17.4896 21 12.521C21 7.55245 16.9588 3.521 12 3.521ZM17.9447 7.66959C19.0184 8.97762 19.6627 10.6468 19.6822 12.4527C19.4284 12.4039 16.8904 11.8865 14.333 12.2086C14.2744 12.0817 14.2256 11.9451 14.167 11.8084C14.0108 11.4375 13.8352 11.0568 13.6594 10.6956C16.4902 9.5438 17.7787 7.88434 17.9447 7.66959ZM12 4.84855C13.9523 4.84855 15.7386 5.58066 17.0955 6.78131C16.9588 6.97653 15.7972 8.52859 13.064 9.55353C11.8048 7.24009 10.4089 5.34638 10.1942 5.05354C10.77 4.91688 11.3753 4.84855 12 4.84855ZM8.72996 5.57089C8.93494 5.84421 10.3015 7.74768 11.5803 10.0123C7.98807 10.969 4.81562 10.9494 4.47397 10.9494C4.9718 8.56764 6.58243 6.58607 8.72996 5.57089ZM4.30803 12.5308C4.30803 12.4527 4.30803 12.3746 4.30803 12.2965C4.63991 12.3062 8.36876 12.3551 12.205 11.2032C12.4295 11.6327 12.6345 12.072 12.8297 12.5112C12.7321 12.5405 12.6247 12.5698 12.5271 12.5991C8.56399 13.8778 6.45553 17.3724 6.27983 17.6652C5.05965 16.3084 4.30803 14.5026 4.30803 12.5308ZM12 20.213C10.2234 20.213 8.58352 19.6078 7.28525 18.5926C7.42191 18.3095 8.98371 15.303 13.3178 13.79C13.3373 13.7802 13.3471 13.7802 13.3666 13.7705C14.4501 16.572 14.8894 18.9244 15.0065 19.598C14.0792 19.9982 13.064 20.213 12 20.213ZM16.2852 18.8952C16.2072 18.4266 15.7972 16.1815 14.7917 13.419C17.2028 13.0383 19.3113 13.6631 19.5749 13.751C19.243 15.8887 18.013 17.7336 16.2852 18.8952Z" fill="black"/>
</svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
