import Heading from "./Utils/Text/Heading"
import Mission from "./Utils/Mission"
import AboutUs from "./Utils/AboutUs"
import Scope from "./Utils/Scope"
import Authors from "./Utils/Authors"
import Journal from "./Utils/Journal"
import Editorial from "./Utils/Editorial"
import Advisory from "./Utils/Advisory"
export default function About() {
  return (
    <div>
      
      <div className="my-7 space-y-10">
        <Heading heading="Our Mission" />
        <Mission />
      </div>
      <div className="my-7 space-y-10">
        <Heading heading="About Us" />
        <AboutUs />
      </div>
      <div className="my-7 space-y-10">
        <Heading heading="Scope & Submission Categories" />
        <Scope />
      </div>
      <div className="my-7 space-y-10">
        <Heading heading="For Authors" />
        <Authors />
      </div>
      <div className="my-7 space-y-10">
        <Heading heading="Editorial Process" />
        <Editorial />
      </div>
      <div className="my-7 space-y-10">
        <Heading heading="Journal Launch" />
        <Journal />
      </div>
       <div className="my-7 space-y-10">
        <Heading heading="Editors and advisory board" />
        <Advisory />
      </div>
    </div>
  )
}
