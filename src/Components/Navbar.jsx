// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to="/">MyWebsite</Link></div>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/About" className="hover:text-gray-200">About</Link>
          <Link to="/Services" className="hover:text-gray-200">Services</Link>
          <Link to="/Contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;