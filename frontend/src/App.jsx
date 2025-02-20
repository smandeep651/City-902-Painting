import React from 'react';
import './App.css';
import { motion } from 'framer-motion'; // For animations
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MeetOurExperts from './components/MeetOurExperts'; // Ensure you import this component
import Careers from './components/Careers'; // Ensure you import this component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with animation */}
      <header className="bg-blue-900 text-white p-5 flex justify-between items-center shadow-lg">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -100 }} // Initial position for animation
          animate={{ opacity: 1, x: 0 }}    // Animated to original position
          transition={{ duration: 1 }}
        >
          CITY 902 PAINTING
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            {/* Use <a> instead of <Link> for internal section navigation */}
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="#meetOurExperts" className="hover:text-yellow-400 transition">Meet Our Experts</a></li>
            <li><a href="#careers" className="hover:text-yellow-400 transition">Careers</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Main content with proper layout */}
      <main className="flex-grow">
        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="meetOurExperts">
          <MeetOurExperts />
        </div>

        <div id="careers">
          <Careers />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
