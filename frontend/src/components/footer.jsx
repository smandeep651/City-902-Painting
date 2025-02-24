import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Company Info */}
        <h3 className="text-2xl font-bold">City 902 Painting</h3>
        <p className="text-sm mt-1">Proudly serving Halifax and surrounding areas.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 my-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 hover:scale-110 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 hover:scale-110 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 hover:scale-110 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-xl hover:text-yellow-400 hover:scale-110 transition duration-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} City 902 Painting. All rights reserved.</p>
      </div>
    </footer>
  );
}
