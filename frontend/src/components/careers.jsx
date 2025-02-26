import { motion } from 'framer-motion';

export default function Careers() {
  return (
    <section
      id="careers"
      className="py-16 text-center relative"
      style={{
        backgroundImage: 'url(/painter.jpg)',
        backgroundSize: 'contain',  // Ensures image fits fully within the section
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',  // Prevents image from repeating
        height: '500px',  // You can adjust the height as needed
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      
      <div className="relative z-10">
        <motion.h3
          className="text-4xl font-bold mt-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join Our Team
        </motion.h3>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          At City 902 Painting, we're always looking for passionate and talented individuals to join our team. We offer great benefits, competitive pay, and an opportunity to work on high-profile projects.
        </p>

        <div className="mt-6">
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
