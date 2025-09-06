import Heading from "../Utils/Text/Heading"
import Mission from "./Utils/Mission"
import AboutUs from "./Utils/AboutUs"
import Scope from "./Utils/Scope"
import Authors from "./Utils/Authors"
import Journal from "./Utils/Journal"
import Editorial from "./Utils/Editorial"
import Advisory from "./Utils/Advisory"
import Profile from "./Popups/Profile"
import data from "../../assets/Data.json"
import { useEffect, useState } from "react"
import Page404 from "../Page404"

export default function About() {
  const query = new URLSearchParams(window.location.search).get("author");
  const [matchedProfile, setMatchedProfile] = useState<any>(null);

  const compare = (a: string) => {
    if (!query) return false;

    // normalize query: replace "-" with space + lowercase
    const formattedQuery = query.replace(/-/g, " ").toLowerCase();

    // normalize data value: lowercase (and trim to be safe)
    const formattedName = a.replace(/\s+/g, " ").toLowerCase().trim();

    return formattedQuery === formattedName;
  };

  useEffect(() => {
    if (query) {
      const match = Object.entries(data).find(([name]) => compare(name));
      if (match) {
        setMatchedProfile({ name: match[0], ...match[1] });
      }
    }
  }, [query]);

  return (
    <div>

      {query ? (
       matchedProfile ? (
        <div className="my-7 space-y-10">
          <Profile profile={matchedProfile} />
        </div>
        ) : (
         <Page404 />
        )
      ) : (
        // Otherwise show the full About page
        <>
          <div className="my-7 space-y-10" id="top">
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
        </>
      )}
    </div>
  );
}
