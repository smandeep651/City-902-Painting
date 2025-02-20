import { motion } from 'framer-motion';
export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <motion.h3 
          className="text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h3>
        <p className="text-gray-600 mt-2">Get in touch with CITY 902 Painting for a free consultation.</p>
        <form className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            rows="4"
          ></textarea>
          <motion.button 
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </section>
    );
  }
  