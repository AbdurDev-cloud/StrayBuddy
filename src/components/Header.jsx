import { FaHome, FaPaw, FaInfoCircle } from 'react-icons/fa'; 
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="StrayBuddy logo"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "w-12" : "w-16"
            }`}
          />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            StrayBuddy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 transition duration-300">
            <FaHome className="text-orange-300" />
            <span className={`hover-shimmer ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Home
            </span>
          </Link>
          <Link to="/Report" className="flex items-center gap-1 transition duration-300">
            <FaPaw className="text-orange-300" />
            <span className={`hover-shimmer ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Report
            </span>
          </Link>
          <Link to="/About" className="flex items-center gap-1 transition duration-300">
            <FaInfoCircle className="text-orange-300" />
            <span className={`hover-shimmer ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              About
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`focus:outline-none text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 px-4 pb-4 text-white backdrop-blur-sm">
          <Link to="/" className="block py-2 border-b" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/report" className="block py-2" onClick={() => setMenuOpen(false)}>
            Report
          </Link>
          <Link to="/about" className="block py-2 border-t" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}
    </header>
  );
}