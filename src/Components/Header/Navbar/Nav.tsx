import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen relative h-fit">
      

      {/* Desktop menu */}
    <div className="grid grid-cols-2 mt-3">
      <ul className="list-none hidden md:flex justify-center items-center md:text-xl space-x-6 py-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guidelines">Submission Guidelines</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul className="list-none hidden md:flex justify-center items-center md:text-xl space-x-6 py-2">
        <li><a href="https://synexisjournal.com/online/index.php/synexis/issue/current" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Current Issues</a></li>
            <li><a href="https://synexisjournal.com/online/index.php/synexis/issue/archive" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Archives</a></li>
            <li><a href="https://synexisjournal.com/online/index.php/synexis/submission" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Submit</a></li>

      </ul>
      </div>

      {/* Mobile menu */}
        <ul className="list-none md:hidden flex justify-center items-center text-xl space-x-6 py-2">
            <li><a href="https://synexisjournal.com/online/index.php/synexis/issue/current" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Current Issues</a></li>
            <li><a href="https://synexisjournal.com/online/index.php/synexis/issue/archive" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Archives</a></li>
            <li><a href="https://synexisjournal.com/online/index.php/synexis/submission" target="_blank" className="p-2 bg-[#38A169] text-white rounded-md hover:bg-[#4c8969] duration-500 transition-all">Submit</a></li>
</ul>
{/* Mobile menu button */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-2 mt-3 h-fit">
        <ul className="list-none md:hidden flex flex-col items-center text-lg space-y-4 py-4 bg-[#F0F9F4] absolute w-full z-10">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
           <li><Link to="/about">About</Link></li>
          <li><Link to="/guidelines"  onClick={toggleMenu}>Submission Guidelines</Link></li>

            </ul>
          
      </div>
      )}
    </div>
  );
}
