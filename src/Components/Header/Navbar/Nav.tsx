import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen relative">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="list-none hidden md:flex justify-center items-center md:text-xl space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/current-issue">Current Issue</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/submit-article">Submit article</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="list-none md:hidden flex flex-col items-center text-lg space-y-4 py-4 bg-[#F0F9F4] absolute w-full z-10">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/current-issue" onClick={toggleMenu}>Current Issue</Link></li>
          <li><Link to="/archive" onClick={toggleMenu}>Archive</Link></li>
          <li><Link to="/submit-article" onClick={toggleMenu}>Submit article</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        </ul>
      )}
    </div>
  );
}
