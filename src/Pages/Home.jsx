import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-25">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to SmartTech</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover innovative and reliable tech products tailored for your lifestyle.
        </p>
        <Link to="/Product">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Shop Now  
            </button>
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Product Card 1 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition p-6">
          <img
            class="w-16 md:w-32 lg:w-48"
            src="/images/iphone.jpeg"
            alt="Product 1"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Smartphone X</h2>
          <p className="text-gray-600 mb-2">High performance smartphone with sleek design.</p>
          <span className="text-blue-600 font-bold">$499</span>
        </div>

        {/* Product Card 2 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition p-6">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="/images/noise.jpeg"
            alt="Product 2"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Noise-Canceling Headphones</h2>
          <p className="text-gray-600 mb-2">Immerse yourself in rich sound and silence the noise.</p>
          <span className="text-blue-600 font-bold">$199</span>
        </div>

        {/* Product Card 3 */}
        <div className="border rounded-lg shadow hover:shadow-lg transition p-6">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="/images/laptop.jpeg"
            alt="Product 3"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">UltraBook Pro</h2>
          <p className="text-gray-600 mb-2">Lightweight, powerful, and built for productivity.</p>
          <span className="text-blue-600 font-bold">$899</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
