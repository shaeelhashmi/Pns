
import Box from './Utils/Box/Box'
import FieldBox from './Utils/Box/Utils/FieldBox'
import Button from './Utils/Button/Button'
import Contact from './Utils/Contact'
import Faqs from './Utils/Faqs'
import News from './Utils/News'
export default function Home() {
  return (
    <>
    <div className='grid xl:grid-cols-[1fr_auto] grid-cols-1 m-5  md:mx-13   mx-3 gap-4'>
    <div >  
     <div className='my-7 '>
      <Box heading='About Our Journal' subheading='Synexis' description='Synexis is a quarterly, peer-reviewed journal that publishes significant original scientific research plus reviews. We seek to publish manuscripts that are influential in their fields or across fields and that will substantially advance scientific understanding. The selected manuscript should present novel and broadly important data, syntheses, or concepts. We welcome submissions from all fields of science.' topColor='linear-gradient(90deg, #065F46 0%, #09926B 30%, #0BAC7E 75%, #0CC690 100%)' remainingElement={<div className="flex justify-end"><Button text='About' link='/about' bg='#38A169' hoverBg='#4c8969' /></div>} border={false} svg={
          <svg className="md:w-13 md:h-13 w-10 h-10" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.51758" y="1.5" width="20" height="20" stroke="url(#paint0_linear_532_68)" stroke-width="2"/>
<path d="M7.51758 11.5H15.5176M7.51758 7.5H15.5176M7.51758 15.5H13.5176" stroke="url(#paint1_linear_532_68)" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_532_68" x1="1.51758" y1="1.5" x2="2001.52" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#065F46"/>
<stop offset="0.3" stop-color="#047857"/>
<stop offset="0.7" stop-color="#059669"/>
<stop offset="1" stop-color="#10B981"/>
</linearGradient>
<linearGradient id="paint1_linear_532_68" x1="7.51758" y1="7.5" x2="807.518" y2="7.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#065F46"/>
<stop offset="0.3" stop-color="#047857"/>
<stop offset="0.7" stop-color="#059669"/>
<stop offset="1" stop-color="#10B981"/>
</linearGradient>
</defs>
</svg>

      }></Box>
    </div>
        <div className='my-7 '>
      <Box heading='Submission Guidelines' subheading='Quick Submission Overview ' description='Manuscripts should be submitted to our manuscript submission and information portal. The status of submitted manuscripts can also be tracked at this portal.
Authors should familiarize themselves with the overall editorial policies for Synexis before submitting their manuscript. These policies spell out the rights and responsibilities that authors agree to when submitting and publishing their manuscripts.  ' topColor='linear-gradient(90deg, #293342 0%, #495A75 30%, #596E8F 75%, #6882A8 100%)' remainingElement={<div className="flex justify-end flex-col my-3 items-end space-y-3"><Button text='Submit Manuscript' link='/guidelines' bg='#38A169' hoverBg='#4c8969'/>
<Button text='Submit Article' bg="#2D3748" link='https://synexisjournal.com/online/index.php/synexis/submission' target='_blank' hoverBg='#425068'></Button></div>} border={false} svg={
          <svg xmlns="http://www.w3.org/2000/svg" className="md:w-13 md:h-13 w-10 h-10" viewBox="17.75 19.5 16 12" fill="none">
<path d="M31.7559 19.5H19.7559C18.6513 19.5 17.7559 20.3954 17.7559 21.5V29.5C17.7559 30.6046 18.6513 31.5 19.7559 31.5H31.7559C32.8604 31.5 33.7559 30.6046 33.7559 29.5V21.5C33.7559 20.3954 32.8604 19.5 31.7559 19.5Z" stroke="url(#paint0_linear_532_120)" stroke-width="2"/>
<path d="M21.7559 23.5H29.7559M21.7559 27.5H27.7559" stroke="url(#paint1_linear_532_120)" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_532_120" x1="17.7559" y1="19.5" x2="1617.76" y2="19.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#065F46"/>
<stop offset="0.3" stop-color="#047857"/>
<stop offset="0.7" stop-color="#059669"/>
<stop offset="1" stop-color="#10B981"/>
</linearGradient>
<linearGradient id="paint1_linear_532_120" x1="21.7559" y1="23.5" x2="821.756" y2="23.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#065F46"/>
<stop offset="0.3" stop-color="#047857"/>
<stop offset="0.7" stop-color="#059669"/>
<stop offset="1" stop-color="#10B981"/>
</linearGradient>
</defs>
</svg>
      }></Box>
      
       </div>
        <div className='my-7'>
      <Box heading='Special Issues' subheading='Curated Research Collections' description='Our Special Issues program brings together cutting-edge research around focused themes, emerging fields, and interdisciplinary topics. Each collection is carefully curated by leading experts to showcase breakthrough discoveries and foster collaborative scientific dialogue.' topColor='linear-gradient(90deg, #330909 0%, #811B1B 25%, #8D2A2A 75%, #A14B4B 100%)' remainingElement={
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <FieldBox heading="BioSciences" subHeading="Life Sciences" bgColor='#3255A6'/>
           <FieldBox heading="Chemistry" subHeading="Chemical Sciences" bgColor='#737DC6'/>
            <FieldBox heading="Physical Sciences" subHeading="Physics & Mathematics" bgColor='#2A8F71'/>
             <FieldBox heading="Engineering" subHeading="Applied Sciences" bgColor='#7D4F89'/>
        </div>
      } 
      
      border={false} svg={
<svg xmlns="http://www.w3.org/2000/svg" className="md:w-13 md:h-13 w-10 h-10" viewBox="0 0 25 24" fill="none">
<path d="M12.5176 2.5L15.5176 8.5L22.5176 9.5L17.5176 14.5L18.5176 21.5L12.5176 18.5L6.51758 21.5L7.51758 14.5L2.51758 9.5L9.51758 8.5L12.5176 2.5Z" stroke="#DC2626" stroke-width="2"/>
<path d="M12.5176 15.5C14.1744 15.5 15.5176 14.1569 15.5176 12.5C15.5176 10.8431 14.1744 9.5 12.5176 9.5C10.8607 9.5 9.51758 10.8431 9.51758 12.5C9.51758 14.1569 10.8607 15.5 12.5176 15.5Z" fill="#DC2626"/>
</svg>
      }></Box>
    </div>
    </div>
    <News></News>
       </div>
    <div className="my-7">
      <Faqs/>
    </div>
     <div className="mt-7">
      <Contact/>
    </div>
    
 
 
 </>
  )
}
