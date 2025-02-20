import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: "Commercial Painting", img: "/construction.webp" },
    { title: "Residential Painting", img: "/house.webp" },
    { title: "Industrial Coatings", img: "/industrial.webp" },
    { title: "Exterior & Interior", img: "/two.jpg" },
    { title: "Wallpaper & Finishes", img: "/wallpaper.webp" },
    { title: "Epoxy Flooring", img: "/Epoxy.jpg" },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 text-center">
      <h3 className="text-4xl font-bold text-blue-900">Our Services</h3>
      <p className="text-gray-600 mt-2">We offer top-quality painting solutions for commercial and residential properties.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-10">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-md" 
              />
            </div>
            <h4 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h4>
            <p className="text-gray-700">High-quality {service.title.toLowerCase()} services to ensure perfection.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
