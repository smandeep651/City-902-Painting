import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Careers from './careers'; // Import Careers component

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-3xl hover:text-blue-600 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Meet Our Experts Section */}
      <section id="experts" className="py-16 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Experts</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our team of experts is committed to delivering top-notch painting services with attention to detail and professionalism.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Expert 1 */}
          <div className="text-center transform hover:scale-105 transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="General Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">General Manager</p>
            <p className="text-gray-600 mt-2">
              John has over 15 years of experience in managing large-scale painting projects, ensuring quality and timely delivery.
            </p>
          </div>

          {/* Expert 2 */}
          <div className="text-center transform hover:scale-105 transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Operations Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Operations Manager</p>
            <p className="text-gray-600 mt-2">
              Jane oversees the day-to-day operations of our painting services, ensuring seamless communication and execution of projects.
            </p>
          </div>

          {/* Expert 3 */}
          <div className="text-center transform hover:scale-105 transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Project Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Sam Johnson</h3>
            <p className="text-gray-500">Project Manager</p>
            <p className="text-gray-600 mt-2">
              Sam is an expert at managing painting projects, making sure everything runs smoothly from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <Careers />
    </section>
  );
};

export default ContactForm;
