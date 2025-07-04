import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">SmartTech</h2>
          <p className="text-sm text-gray-200">
            Delivering quality and innovation in every tech product we offer. Your satisfaction is our priority.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/About" className="hover:text-gray-300">About</a></li>
            <li><a href="/Services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/Contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@smarttech.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Address: 123 Tech Street, Cityville</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-200 border-t border-blue-500 py-4">
        © {new Date().getFullYear()} SmartTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
