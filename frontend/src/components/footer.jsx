import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Company Info */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">City 902 Painting</h3>
          <p className="text-lg mt-2">Proudly serving Halifax and surrounding areas with quality painting services.</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-2">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Epoxy Coating</li>
              <li>Commercial Painting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2">
              <li>Home</li>
              <li>Gallery</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-2">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@city902painting.com</li>
              <li>Address: Halifax, NS, Canada</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} City 902 Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
