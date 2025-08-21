
import SubHeading from '../../../Utils/Text/SubHeading'
import Subtext from '../../../Utils/Text/Subtext'
import Box from '../../../Utils/Text/Box/Box'
export default function EditorialBox(props:{Heading:string,desc:string,button:string}) {
  return (
    <>
    <Box Boxes={
                <div className="space-y-2 ">
                  <SubHeading subheading={props.Heading} />
                  <Subtext description={props.desc} size="text-lg" color="#4A5568"/>
                </div>}/>
    
</>
  )
}
