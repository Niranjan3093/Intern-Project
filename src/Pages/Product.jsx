import React from 'react';

const Product = () => {
  const features = [
    'Stunning 6.7-inch OLED Display',
    'Triple-lens Ultra Wide Camera',
    'Face ID with Advanced Privacy',
    'All-day Battery Life',
    'Water & Dust Resistant (IP68)',
  ];

  const specs = {
    Processor: 'Octa-core A16 Bionic',
    Display: '6.7" OLED Super Retina XDR',
    Camera: 'Triple 12MP (Wide, Ultra Wide, Telephoto)',
    Battery: '4350mAh, Fast Charging',
    Storage: '128GB / 256GB / 512GB',
    OS: 'SmartOS v12',
    Connectivity: '5G, Wi-Fi 6, Bluetooth 5.2',
  };

  const reviews = [
    {
      name: 'Anita K.',
      comment: 'Absolutely love the performance and camera quality. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Ramesh P.',
      comment: 'Battery lasts the whole day even with heavy use. The design is sleek too!',
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-25">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <img
            src="/images/iphone.jpeg"
            alt="Smartphone Pro"
            className="rounded-lg shadow-md"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Smartphone Pro Max 2025</h1>
            <p className="text-gray-700 text-lg mb-6">
              A premium smartphone experience crafted with power, performance, and elegance. Ideal for professionals,
              creators, and tech lovers.
            </p>
            <span className="text-2xl font-semibold text-blue-600 mb-4">$999.00</span>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Features</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-12">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>

        {/* Gallery */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((img) => (
            <img
              key={img}
              src={`https://source.unsplash.com/300x300/?smartphone,${img}`}
              alt={`Gallery ${img}`}
              className="rounded-lg shadow hover:scale-105 transition transform duration-300"
            />
          ))}
        </div>

        {/* Specifications Table */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
        <table className="w-full text-left text-gray-700 mb-12">
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key} className="border-b">
                <th className="py-2 pr-4 font-medium text-gray-800 w-1/3">{key}</th>
                <td className="py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Reviews Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600">{review.name}</h3>
              <p className="text-sm text-yellow-500">Rating: {'⭐'.repeat(review.rating)}</p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
