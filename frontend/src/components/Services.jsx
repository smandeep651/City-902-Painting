import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Importing smooth scroll package

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
      <h3 className="text-4xl mt-12 font-bold text-blue-900">Our Services</h3>
      <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
        We offer top-quality painting solutions for commercial and residential properties.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 lg:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h4 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h4>
            <p className="text-gray-700 text-base">
              High-quality {service.title.toLowerCase()} services to ensure perfection.
            </p>
            {/* Adding smooth scroll for buttons */}
            <Link
              to={service.title.toLowerCase().replace(" & ", "-").replace(" ", "-")} // Adjusts target id dynamically
              smooth={true}
              duration={500}
              className="text-blue-500 mt-4 inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
