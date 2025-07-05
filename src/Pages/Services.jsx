import React from 'react';

const services = [
  {
    title: 'Product Development',
    description: 'We build high-quality tech products, from concept to delivery, using modern tools and methodologies.',
    icon: 'https://img.icons8.com/ios-filled/100/code.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and attractive user interfaces that enhance customer satisfaction.',
    icon: 'https://img.icons8.com/ios-filled/100/design.png',
  },
  {
    title: 'Technical Support',
    description: 'We provide 24/7 technical support to ensure our customers experience smooth and hassle-free services.',
    icon: 'https://img.icons8.com/ios-filled/100/technical-support.png',
  },
  {
    title: 'Digital Marketing',
    description: 'We help you reach your audience with SEO, social media marketing, and analytics.',
    icon: 'https://img.icons8.com/color/2x/search',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-25">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore the range of services we offer to bring value and innovation to your business.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
