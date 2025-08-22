import Box from "../../Utils/Text/Box/Box"
import AuthorHeading from "./Text/AuthorHeading"
import AuthorText from "./Text/AuthorText"
export default function Authors() {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <Box >
         <>
          <div className="space-y-2 rounded-md">
                  <AuthorHeading bg="#D3E3FF" heading="ManuScript Submission" text="#1E3A8A"/>
                  <AuthorText desc="Submit in the format provided on our website
to minimize typesetting and editorial errors.
Fast-track peer review process available." />
                </div>
                <button className="bg-[#D3E3FF] p-2 italic  font-bold rounded-md my-2 mt-4">Submit ManuScript</button>
              </>
      </Box>
      <Box >
            <>
               <div className="space-y-2 rounded-md">
                  <AuthorHeading bg="#CAF8E3" heading="Open Access" text="#064E3B"/>
                  <AuthorText desc="Freely accessible to all readers worldwide
Supported by voluntary donations
No article processing charges" />
                </div>
                <button className="bg-[#CAF8E3] p-2 italic  font-bold rounded-md my-2 mt-4">Learn More</button>
        </>
      </Box>
               <div className="relative w-[100%] p-7 px-10 my-3   rounded-lg border-2 border-[#047957] [box-shadow:0_4px_4px_0_rgba(0,0,0,0.25)] xl:col-span-1 md:col-span-2" style={{background:"linear-gradient(110deg, #1F2937 0%, #064E3B 100%)"}}>
          
                <div className="space-y-2 rounded-md">
                  <AuthorHeading bg="transparent" heading="Our Vision" text="#FFFFFF"/>
                  <AuthorText desc="A future where scientific knowledge
is openly accessible and serves the
collective benefit of society" color='#FFFFFF'/>
  <AuthorText desc="Cross-pollination of ideas
driving innovation and solutions" color='#FFFFFF'/>
                </div>
              </div>
              </div>
              
  )
}
