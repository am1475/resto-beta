// src/components/Kebab.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/k1.jpg';
import dish2 from '../images/k2.jpeg';
import dish3 from '../images/k3.jpeg';
import dish4 from '../images/k4.jpg';
import dish5 from '../images/k5.jpeg';
import dish6 from '../images/k6.jpg';
import dish7 from '../images/k7.jpeg';
import dish8 from '../images/k8.jpg';
import dish9 from '../images/k9.jpg';
import dish10 from '../images/k10.jpg';

const kebabdishes = [
  {
    name: 'Chicken Tikka',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Spicy grilled chicken kebabs',
    price: 15.99,
  },
  {
    name: 'Chicken Reshmi Kebab',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Juicy chicken kebabs with a creamy texture',
    price: 12.99,
  },
  {
    name: 'Chicken Seekh Kebab',
    image: dish3,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Tender lamb kebabs with a hint of spice',
    price: 17.99,
  },
  {
    name: 'Paneer Tikka',
    image: dish4,
    rating: '4.4',
    time: '25-35 mins',
    description: 'Grilled paneer chunks marinated in spices',
    price: 14.99,
  },
  {
    name: 'Chicken Shami Kebab',
    image: dish5,
    rating: '4.8',
    time: '20-30 mins',
    description: 'Ground beef patties with a blend of spices',
    price: 16.99,
  },
  {
    name: 'Fish Tikka',
    image: dish6,
    rating: '4.3',
    time: '25-35 mins',
    description: 'Marinated fish fillets grilled to perfection',
    price: 18.49,
  },
  {
    name: 'Mutton Boti Kebab',
    image: dish7,
    rating: '4.7',
    time: '20-30 mins',
    description: 'Spiced mutton pieces grilled on skewers',
    price: 19.49,
  },
  {
    name: 'Vegetable Seekh Kebab',
    image: dish8,
    rating: '4.6',
    time: '25-35 mins',
    description: 'Mixed vegetable kebabs with aromatic spices',
    price: 12.49,
  },
  {
    name: 'Prawn Kebab',
    image: dish9,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Grilled prawns marinated in spicy sauce',
    price: 20.99,
  },
  {
    name: 'Nawabi Kebab',
    image: dish10,
    rating: '4.3',
    time: '25-35 mins',
    description: 'Tender chicken kebabs with a smoky flavor',
    price: 14.49,
  },
];

const Kebab = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Kebab Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kebabdishes.map((dish, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <div className="h-52 overflow-hidden rounded-t-lg mb-4">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-gray-600 text-sm">{dish.rating} <span className="text-green-500">★</span></span>
                  <span className="text-gray-600 text-sm ml-4">{dish.time}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{dish.description}</p>
              <p className="text-gray-700 mb-2 font-bold">${dish.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(dish)}
                className="mt-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kebab;
