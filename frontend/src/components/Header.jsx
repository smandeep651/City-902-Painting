import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Paintbrush, PaintRoller } from "lucide-react"; // Import icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Blue Bar (Logo + Hamburger Menu) */}
      <div className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto p-5 flex justify-between items-center">
          {/* Hamburger Menu Icon (Always Visible) */}
          <div className="flex items-center cursor-pointer z-50" onClick={toggleMenu}>
            <button className="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-400">
              <PaintRoller className="w-6 h-6 text-blue-900" /> {/* Paint Roller Icon */}
            </button>
          </div>

          {/* Logo with Paintbrush Icon */}
          <motion.h1
            className="text-3xl font-extrabold tracking-wider flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Paintbrush className="w-6 h-6 text-yellow-400" /> {/* Paintbrush Icon */}
            <span>CITY 902 PAINTING</span>
          </motion.h1>
        </div>
      </div>

      {/* Second Blue Bar (Menu on Large Screens) */}
      <div
        className={`bg-blue-900 transition-all duration-300 ${
          isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0 md:h-auto"
        } overflow-hidden md:block`}
      >
        <nav className="max-w-screen-xl mx-auto px-5 py-3 flex flex-col md:flex-row md:space-x-8 text-lg font-medium text-white">
          {["services", "about", "testimonials", "contact", "meetOurExperts", "careers"].map(
            (item, index) => (
              <Link
                key={index}
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, " $1")}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Sidebar Menu (Only for Smaller Screens) */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 h-full bg-blue-900 w-64 p-5 z-50 transition-transform duration-300 transform -translate-x-full md:hidden`}
      >
        <ul className="space-y-4 text-lg font-medium text-white">
          {["services", "about", "testimonials", "contact", "meetOurExperts", "careers"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="hover:text-yellow-400 transition duration-300"
                  onClick={toggleMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, " $1")}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
