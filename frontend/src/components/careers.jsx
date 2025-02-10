// src/components/Careers.jsx
import React from 'react';

const Careers = () => {
  return (
    <section id="careers" className="mt-16 text-center bg-blue-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Join Our Team</h2>
      <p className="text-lg text-gray-600 mb-8">
        We're always looking for passionate and skilled individuals to join our growing team. If you're interested in working with us, please reach out!
      </p>

      {/* Career Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg mx-auto max-w-xl">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Submit Your Resume</h3>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Full Name"
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

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-medium">Upload Resume</label>
            <input
              type="file"
              className="w-full border-gray-300 p-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
