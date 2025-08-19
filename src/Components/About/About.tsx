import Heading from "./Utils/Text/Heading"
import Mission from "./Utils/Mission"
import AboutUs from "./Utils/AboutUs"
import Scope from "./Utils/Scope"
import Authors from "./Utils/Authors"
export default function About() {
  return (
    <div>
      
      <div className="my-7">
        <Heading heading="Our Mission" />
        <Mission />
      </div>
      <div className="my-7">
        <Heading heading="About Us" />
        <AboutUs />
      </div>
      <div className="my-7">
        <Heading heading="Scope & Submission Categories" />
        <Scope />
      </div>
      <div className="my-7">
        <Heading heading="For Authors" />
        <Authors />
      </div>
    </div>
  )
}
