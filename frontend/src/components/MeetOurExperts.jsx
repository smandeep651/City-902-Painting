import { motion } from 'framer-motion';

export default function MeetOurExperts() {
  const experts = [
    {
      name: "Mandeep Singh",
      title: "Operations Manager",
      image: "/me.jpg",
      description: "Mandeep with years of experience in the painting industry, specializing in residential and commercial projects. His attention to detail and commitment to excellence make him a true expert in his field."
    },
    {
      name: "Anit Choudhary",
      title: "Project Manager",
      image: "/Anit.jpg",
      description: "Anit brings years of project management experience to the team. His organizational skills and leadership ensure that every project runs smoothly, from start to finish."
    }
  ];

  return (
    <section id="meet-our-experts" className="py-16 px-8 mt-10 bg-white text-center">
      <h3 className="text-4xl font-bold  mt-12 text-blue-900">Meet Our Experts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-8">
        {experts.map((expert, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-yellow-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={expert.image} 
              alt={expert.name} 
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h4 className="text-2xl font-bold text-blue-900">{expert.name}</h4>
            <p className="text-xl text-gray-600">{expert.title}</p>
            <p className="mt-4 text-gray-700">{expert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
