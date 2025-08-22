import Heading from '../Utils/Text/Heading'
import Editorial from './Utils/Editorial'
import Integrity from './Utils/Integrity'

export default function SubmitArticle() {
  return (
    <div>
        <div className="my-7 space-y-10">
              <Heading heading="Editorial Policies" />
              <Editorial/>
        </div>
         <div className="my-7 space-y-10">
              <Heading heading="Images Data & Integrity" />
              <Integrity/>
        </div>
    </div>
  )
}
