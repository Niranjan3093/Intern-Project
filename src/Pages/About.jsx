import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-25">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Us</h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 text-center mb-12">
          At <strong>SmartTech</strong>, we are passionate about providing innovative and reliable tech products
          that enhance your lifestyle. From smartphones to smartwatches, we believe in quality, service, and customer satisfaction.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              To make advanced technology accessible, affordable, and user-friendly for everyone. We aim to improve everyday life
              through innovative design and cutting-edge solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h2>
            <p className="text-gray-700">
              To become a global leader in consumer electronics, known for creativity, performance, and integrity.
              We envision a world where technology connects people and empowers progress.
            </p>
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Meet the Team</h2>
          <p className="text-gray-700 mb-6">
            We are a team of tech enthusiasts, engineers, and designers dedicated to making your digital experience seamless.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-40">
              <img
                src="/images/person1.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <p className="font-medium">Niranjan Deuja</p>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
            <div className="w-40">
              <img
                src="/images/person2.jpg"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <p className="font-medium">Rezan Deuja</p>
              <p className="text-sm text-gray-500">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
