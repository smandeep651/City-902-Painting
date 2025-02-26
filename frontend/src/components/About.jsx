import { Carousel } from 'react-responsive-carousel'; // For the sliding logos

export default function About() {
  return (
    <section id="about" className="py-16 bg-white text-center">
      {/* Heading */}
      <h3 className="text-4xl mt-12 font-bold text-blue-900 mb-6">About Us</h3>

      {/* Company Introduction */}
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          At City 902 Painting, we are passionate about delivering the best in commercial and residential painting. Founded in 2020, we have quickly established ourselves as a trusted partner for both large and small projects. With a team of skilled professionals and a commitment to quality, we ensure every job is completed to the highest standard.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          Our dedication to excellence has earned us the opportunity to work with some of the biggest names in the industry, including Bird, Ellis Don, and Lindsay Construction. We are proud to have been part of their projects, delivering exceptional results that meet and exceed expectations.
        </p>
      </div>

      {/* Company Logos Carousel */}
      <div className="my-12">
        <h4 className="text-xl font-semibold text-blue-900 mb-4">Trusted by Industry Leaders</h4>
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          transitionTime={800}
          className="mx-auto w-3/4"
        >
          {/* Logo Images */}
          <div>
            <img src="/bird.jpg" alt="Bird Construction Logo" />
          </div>
          <div>
            <img src="/lindsay.jpg" alt="Ellis Don Logo" />
          </div>
          <div>
            <img src="/pcl.png"  alt="PCL Construction Logo" />
          </div>
          <div>
            <img src="/ellisdon.jpg"  alt="Lindsay Construction Logo" />
          </div>
         
        </Carousel>
      </div>

      {/* Additional content */}
      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-gray-600 text-lg leading-relaxed">
          With our team’s extensive experience in both residential and commercial projects, we take pride in transforming spaces and ensuring each project meets the unique needs of our clients. Whether it’s a new construction, a renovation, or maintenance, we provide the highest level of service to every customer.
        </p>
      </div>
    </section>
  );
}
