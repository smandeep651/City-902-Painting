import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Company Info */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">City 902 Painting</h3>
          <p className="text-lg mt-2">Proudly serving Halifax and surrounding areas with quality painting services.</p>
          <p className="mt-2">Address: 123 Painting Lane, Halifax, Nova Scotia</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Additional Information */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold">Our Services</h4>
          <ul className="mt-2 text-gray-400">
            <li>Residential Painting</li>
            <li>Commercial Painting</li>
            <li>Industrial Coatings</li>
            <li>Exterior & Interior Painting</li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} City 902 Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
