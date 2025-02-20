import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel'; // Ensure you have this library

export default function Testimonials() {
  const testimonials = [
    { text: "CITY 902 Painting transformed our office. Professional & on time!", author: "Ellis Don" },
    { text: "Best residential painters in Nova Scotia! Highly recommend.", author: "A Happy Homeowner" },
    { text: "Excellent workmanship! They exceeded our expectations.", author: "Lindsay Construction" },
    { text: "Reliable and efficient service. Would definitely hire again!", author: "Bird Construction" }
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-900 text-white text-center">
      <motion.h3 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h3>
      <Carousel showThumbs={false} autoPlay infiniteLoop className="max-w-2xl mx-auto mt-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="p-6" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <p className="text-lg">"{testimonial.text}"</p>
            <h5 className="mt-4 font-bold">- {testimonial.author}</h5>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
