import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="StrayBuddy" className="h-10" />
            <span className="text-xl font-semibold">StrayBuddy</span>
          </div>
          <p className="text-sm leading-relaxed">
            Creating a safer world for strays through awareness, action,
            and compassion. Join us in building a better tomorrow.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-bold mb-3 text-gray-300">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/report" className="hover:underline">Report</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/map" className="hover:underline">Map</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold mb-3 text-gray-300">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact / Other */}
        <div>
          <h3 className="font-bold mb-3 text-gray-300">Contact</h3>
          <p className="text-sm">Email: support@straybuddy.org</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} StrayBuddy. All rights reserved.
      </div>
    </footer>
  );
}
