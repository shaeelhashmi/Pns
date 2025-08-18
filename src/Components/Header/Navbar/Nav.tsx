import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <div className="w-screen">
      <ul className="list-none flex justify-center items-center text-xl space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/current-issue">Current Issue</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/submit-article">Submit article</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
