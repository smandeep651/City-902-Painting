import React from 'react';
import logo from '../assets/logo.jpg'; // Replace with your logo

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Navbar Section */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <ul className="flex space-x-8 text-lg font-semibold text-gray-600">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#careers" className="hover:text-yellow-500 transition duration-300">Careers</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500 transition duration-300">Our Work</a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500 transition duration-300">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Logo Section */}
      <div className="max-w-6xl mx-auto py-6 px-6 text-center">
        <img src={logo} alt="Company Logo" className="w-full h-16 mx-auto" />
      </div>
    </header>
  );
};

export default Header;
