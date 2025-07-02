import { FaHome, FaPaw, FaInfoCircle } from 'react-icons/fa'; 
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import {FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";



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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-gray-900 ${isScrolled ? "shadow-md" : ""}`}
      style={{ background: isScrolled ? '#f3f4f6' : '#1f2937' }} /* Light gray when scrolled, dark gray when not */
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
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-500' : 'text-white'}`}>
            StrayBuddy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            id="home-link"
            to="/"
            className={`group flex items-center gap-1 transition duration-300 ${isScrolled ? "text-gray-400" : "text-white"}`}
          >
            <FaHome
              className={`transition duration-300 ${isScrolled ? "text-gray-500 group-hover:text-orange-300" : "text-orange-300"}`}
            />
            <span className={`hover-shimmer ${isScrolled ? "text-gray-400" : "text-white"}`}>
              Home
            </span>
          </Link>
          <Link
            id="report-link"
            to="/Report"
            className={`group flex items-center gap-1 transition duration-300 ${isScrolled ? "text-gray-400" : "text-black"}`}
          >
            <FaPaw
              className={`transition duration-300 ${isScrolled ? "text-gray-500 group-hover:text-green-500" : "text-green-500"}`}
            />
            <span className={`hover-shimmer ${isScrolled ? "text-gray-400" : "text-black"}`}>
              Report
            </span>
          </Link>
          <Link
            id="about-link"
            to="/About"
            className={`group flex items-center gap-1 transition duration-300 ${isScrolled ? "text-gray-400" : "text-white"}`}
          >
            <FaInfoCircle
              className={`transition duration-300 ${isScrolled ? "text-gray-500 group-hover:text-purple-500" : "text-purple-500"}`}
            />
            <span className={`hover-shimmer ${isScrolled ? "text-gray-400" : "text-black"}`}>
              About
            </span>
          </Link>
     <Link
  id="map-link"
  to="/map"
  className={`group flex items-center gap-1 transition duration-300 ${isScrolled ? "text-gray-400" : "text-white"}`}
>
  <FaMapMarkerAlt
    className={`transition duration-300 ${isScrolled ? "text-gray-500 group-hover:text-blue-500" : "text-blue-500"}`}
  />
  <span className={`hover-shimmer ${isScrolled ? "text-gray-400" : "text-white"}`}>
    Live Map
  </span>
</Link>
<Link
  id="login-link"
  to="/login"
  className={`group flex items-center gap-1 transition duration-300 ${isScrolled ? "text-gray-400" : "text-white"}`}
>
  <FaUser className={`transition duration-300 ${isScrolled ? "text-gray-500 group-hover:text-orange-600" : "text-orange-600"}`} />
  <span className={`hover-shimmer ${isScrolled ? "text-gray-400" : "text-black"}`}>
    Login / Signup
  </span>
</Link>





        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`focus:outline-none text-xl ${isScrolled ? 'text-gray-500' : 'text-white'}`}
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
          <Link to="/map" className="block py-2 border-t" onClick={() => setMenuOpen(false)}>
            Live Map
          </Link>
          <Link to="/login" className="block py-2 border-t" onClick={() => setMenuOpen(false)}>
            Login / Signup
          </Link>
        </div>
      )}      
    </header>
  );
}