import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // To handle scrolling smoothly

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto p-5 flex justify-between items-center">
        {/* Logo with animation */}
        <motion.h1
          className="text-3xl font-extrabold tracking-wider cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          CITY 902 PAINTING
        </motion.h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
