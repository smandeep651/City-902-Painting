import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 mt-16">

      {/* Image Section */}
      <div className="w-full">
        <img 
          src="/src/assets/hlobby.jpg" 
          alt="Nova Scotia Background" 
          className="w-full h-[60vh] object-cover transition-transform duration-700 ease-in-out hover:scale-105" 
        />
      </div>

      {/* Residential Painting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Residential Painting</h3>
          <p className="mt-4 text-gray-600">
            High-quality interior and exterior painting for homes across Nova Scotia and New Brunswick.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img src="/src/assets/house.webp" alt="Residential Project in Halifax" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
          <div className="p-4">
            <p className="text-lg text-gray-700">Residential project in Halifax.</p>
          </div>
        </div>
      </div>

      {/* Commercial Painting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Commercial Painting</h3>
          <p className="mt-4 text-gray-600">
            Professional painting services for offices, shops, and businesses in the region.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img src="/src/assets/lift.jpg" alt="Commercial Project in Nova Scotia" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
          <div className="p-4">
            <p className="text-lg text-gray-700">Commercial project in Nova Scotia.</p>
          </div>
        </div>
      </div>

      {/* Wall Coverings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Wall Coverings</h3>
          <p className="mt-4 text-gray-600">
            We offer a wide variety of wall coverings for both residential and commercial spaces.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img src="/src/assets/epoxy.jpg" alt="Wall Covering Project" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
          <div className="p-4">
            <p className="text-lg text-gray-700">Wall covering project in Nova Scotia.</p>
          </div>
        </div>
      </div>

      {/* Interior & Exterior Painting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Interior & Exterior Painting</h3>
          <p className="mt-4 text-gray-600">
            We specialize in both interior and exterior painting to give your space a fresh and vibrant look.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img src="/src/assets/exterior.jpg" alt="Exterior Project in New Brunswick" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
          <div className="p-4">
            <p className="text-lg text-gray-700">Exterior project in New Brunswick.</p>
          </div>
        </div>
      </div>

      {/* Additional Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Additional Services</h3>
          <p className="mt-4 text-gray-600">
            We also offer various other specialized painting and renovation services to meet your unique needs.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
          <img src="/src/assets/two.jpg" alt="Additional Service in Nova Scotia" className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
          <div className="p-4">
            <p className="text-lg text-gray-700">Additional services in Nova Scotia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
