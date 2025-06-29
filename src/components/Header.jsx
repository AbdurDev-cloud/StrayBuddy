
import { FaHome, FaPaw, FaInfoCircle } from 'react-icons/fa'; 
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="StrayBuddy logo" className="w-16 h-auto object-contain" />
          <span className="text-xl font-bold text-gray-800">StrayBuddy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link
  to="/"
  className="flex items-center gap-1 text-gray-800 transition duration-300 ease-in-out hover:text-blue-600 hover:scale-105"
>
  <FaHome className="text-orange-300" />
  Home
</Link>

          <Link
  to="/report"
  className="flex items-center gap-1 text-gray-800 transition duration-300 ease-in-out hover:text-blue-600 hover:scale-105"
>
  <FaPaw className="text-green-500" />
  Report
</Link>

         <Link
  to="/about"
  className="flex items-center gap-1 text-gray-800 transition duration-300 ease-in-out hover:text-blue-600 hover:scale-105"
>
  <FaInfoCircle className="text-purple-500" />
  About
</Link>

        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link to="/" className="block py-2 border-b" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/report" className="block py-2" onClick={() => setMenuOpen(false)}>Report</Link>
          <Link to="/about" className="block py-2 border-t" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
