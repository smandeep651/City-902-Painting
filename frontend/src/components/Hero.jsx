import { motion } from 'framer-motion'; 

export default function Hero() {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center pt-20 md:pt-0" 
      style={{ backgroundImage: `url(/lobby1.jpg)` }}  // Correct path from public folder
    >
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold">Professional Painting Services in Nova Scotia & New Brunswick</h2>
        <p className="mt-4 text-lg">Commercial & Residential | Trusted by Bird, Ellis Don & Lindsay Construction</p>
        <a 
          href="#contact" 
          className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  );
}
