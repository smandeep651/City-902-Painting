import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm'; // Popup Quote Form

import './app.css';

const App = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Services Section */}
      <Services />

      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}


      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer Section */}
      <Footer />

      {/* Popup Quote Form */}
      {isQuoteOpen && <QuoteForm onClose={() => setIsQuoteOpen(false)} />}
    </div>
  );
};

export default App;
