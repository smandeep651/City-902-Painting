import React from "react";
import ellisdonLogo from "../assets/ellisdon.jpg";
import lindsayLogo from "../assets/lindsay.jpg";
import birdLogo from "../assets/bird.jpg";
import pclLogo from "../assets/pcl.png"; // Example additional company

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Trusted Partners</h2>
        <p className="text-gray-600 text-lg mb-8">
          We are proud to have worked with some of the most prestigious builders in Halifax.
        </p>

        {/* Logos Section with animation */}
        <div className="flex justify-center items-center space-x-12 overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            <img src={ellisdonLogo} alt="EllisDon" className="h-16 object-contain" />
            <img src={lindsayLogo} alt="Lindsay Construction" className="h-16 object-contain" />
            <img src={birdLogo} alt="Bird Construction" className="h-16 object-contain" />
            <img src={pclLogo} alt="PCL Construction" className="h-16 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
