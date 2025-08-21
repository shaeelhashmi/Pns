import React from 'react'
import Heading from '../Utils/Text/Heading'
import Editorial from './Utils/Editorial'
export default function SubmitArticle() {
  return (
    <div>
        <div className="my-7 space-y-10">
              <Heading heading="Editorial Policies" />
              <Editorial/>
        </div>
    </div>
  )
}
