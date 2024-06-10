import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import feature1 from '../images/f1.jpg'; // Replace with your own image paths
import feature2 from '../images/f2.jpg';
import feature3 from '../images/f3.jpeg';

const Features = () => {
  const features = [
    { id: 1, name: 'Gourmet Dining', description: 'Savor exquisite cuisine crafted by our top chefs.', image: feature1 },
    { id: 2, name: 'Cozy Atmosphere', description: 'Enjoy your meal in a warm and inviting environment.', image: feature2 },
    { id: 3, name: 'Special Events', description: 'Celebrate your special occasions with us.', image: feature3 },
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Features</h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Discover a world of flavors and culinary delights at our restaurant.
          </p>
          <Link to="/#contact" smooth>
            <button className="mt-8 px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700">
              Book a Table
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={feature.image} alt={feature.name} className="w-full h-56 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
