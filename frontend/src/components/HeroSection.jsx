import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper core styles
import "swiper/css/effect-fade"; // Import specific effect styles (optional if using effect="fade")

const HeroSection = () => {
  return (
    <div>
      {/* Shortcut Icon (Favicon) */}
      <link rel="icon" href="/favicon.ico" />

      {/* Hero Section with Swiper Slider */}
      <section className="relative w-full h-[80vh] bg-black">
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }} // Autoplay with 3-second delay between slides
          effect="fade" // Smooth fade effect between slides
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
          <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url($('../assets/citadel2.jpg')})` }}
>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
              <div className="relative z-10 text-center text-white px-6 flex items-center justify-center h-full">
                <h1 className="text-5xl font-extrabold mb-4">
                  Transform Your Space with Professional Painting
                </h1>
                <p className="text-xl mb-6">
                  We bring your vision to life with high-quality painting services.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/path/to/your/image2.jpg)" }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
              <div className="relative z-10 text-center text-white px-6 flex items-center justify-center h-full">
                <h1 className="text-5xl font-extrabold mb-4">
                  High-Quality Residential & Commercial Painting Services
                </h1>
                <p className="text-xl mb-6">
                  Elevating your home and business with a fresh coat of paint.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/path/to/your/image3.jpg)" }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay */}
              <div className="relative z-10 text-center text-white px-6 flex items-center justify-center h-full">
                <h1 className="text-5xl font-extrabold mb-4">
                  Professional Painters for Every Project
                </h1>
                <p className="text-xl mb-6">
                  From small rooms to large office buildings, we've got you covered.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default HeroSection;
