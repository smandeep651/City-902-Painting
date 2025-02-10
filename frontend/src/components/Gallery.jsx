import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import Hotel from "../assets/hlobby.jpg";
import Epoxy from "../assets/Epoxy.jpg";
import Lobby from "../assets/lobby1.jpg";
import Spray2 from "../assets/spray.mp4";
import Lift from "../assets/lift.jpg";

const Gallery = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    { img: Hotel, description: "EllisDon Project: A beautiful hotel lobby project completed in Nova Scotia.", mediaType: "image" },
    { img: Lobby, description: "Lindsay Project: Revitalizing the lobby of a commercial building.", mediaType: "image" },
    { img: Spray2, description: "Bird Construction Project: A time-lapse video of our work in progress.", mediaType: "video" },
    { img: Lift, description: "PCL Project: A detailed view of our industrial work involving heavy equipment.", mediaType: "image" },
    { img: Epoxy, description: "Epoxy Project: Creating durable, smooth surfaces for industrial spaces.", mediaType: "image" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects We Have Done</h2>

        {/* Project Display with Arrows */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevProject} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Project Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300">
            {projects[currentProject].mediaType === "image" ? (
              <img
                src={projects[currentProject].img}
                alt="Project"
                className="w-full h-64 object-cover rounded-md"
              />
            ) : (
              <video
                src={projects[currentProject].img}
                className="w-full h-64 object-cover rounded-md"
                controls
                autoPlay
                loop
              />
            )}
            <p className="mt-4 text-gray-700 text-lg">{projects[currentProject].description}</p>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNextProject} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
