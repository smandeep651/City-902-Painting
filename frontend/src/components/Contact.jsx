import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  const handlePhoneClick = () => {
    // Open the dialer with the phone number
    window.location.href = 'tel:+19029892070'; // Add the correct phone number
  };

  const handleEmailClick = () => {
    // Open the email client with pre-filled email
    window.location.href = 'mailto:city902painting@yahoo.com?subject=Inquiry&body=Hi, I have a question about your services.';
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <motion.h3
        className="text-4xl mt-12 font-bold text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h3>
      <p className="text-gray-600 mt-2">Get in touch with CITY 902 Painting for a free consultation.</p>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
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

      {/* Display status message */}
      {status && <p className="mt-4 text-lg">{status}</p>}

      {/* Additional Contact Information */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h4 className="text-2xl font-semibold text-blue-900">Reach Out to Us</h4>
        <p className="text-gray-600 mt-2">
          <span
            onClick={handleEmailClick}
            className="text-blue-700 font-medium cursor-pointer hover:underline"
          >
            📧 Email: city902painting@yahoo.com
          </span>
        </p>
        <p className="text-gray-600 mt-2">
          <span
            onClick={handlePhoneClick}
            className="text-blue-700 font-medium cursor-pointer hover:underline"
          >
            📞 Phone: +1902-989-2070
          </span>
        </p>
      </div>
    </section>
  );
}
