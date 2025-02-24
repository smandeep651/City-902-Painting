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
import { FaViacoin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with animation */}
      <Header />

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
