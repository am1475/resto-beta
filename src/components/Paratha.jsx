// src/components/Paratha.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/pa1.jpg';
import dish2 from '../images/pa2.jpg';
import dish3 from '../images/pa3.jpeg';
import dish4 from '../images/pa4.jpg';
import dish5 from '../images/pa5.jpeg';
import dish6 from '../images/pa6.jpg';
import dish7 from '../images/pa7.jpeg';
import dish8 from '../images/pa8.jpeg';
import dish9 from '../images/pa9.jpg';
import dish10 from '../images/pa10.jpg';

const parathaDishes = [
  {
    name: 'Butter Naan',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Soft and fluffy naan brushed with butter',
    price: 15.99,
  },
  {
    name: 'Tandoori Roti',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Whole wheat roti cooked in a tandoor',
    price: 12.99,
  },
  {
    name: 'Aloo Paratha',
    image: dish3,
    rating: '4.8',
    time: '20-30 mins',
    description: 'Stuffed paratha with a spiced potato filling',
    price: 13.99,
  },
  {
    name: 'Paneer Paratha',
    image: dish4,
    rating: '4.6',
    time: '25-35 mins',
    description: 'Paratha filled with seasoned paneer',
    price: 14.99,
  },
  {
    name: 'Gobi Paratha',
    image: dish5,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Stuffed paratha with a spiced cauliflower filling',
    price: 13.49,
  },
  {
    name: 'Methi Paratha',
    image: dish6,
    rating: '4.4',
    time: '25-35 mins',
    description: 'Paratha mixed with fenugreek leaves and spices',
    price: 12.49,
  },
  {
    name: 'Lachha Paratha',
    image: dish7,
    rating: '4.7',
    time: '20-30 mins',
    description: 'Layered paratha with a crispy texture',
    price: 14.49,
  },
  {
    name: 'Cheese Paratha',
    image: dish8,
    rating: '4.3',
    time: '25-35 mins',
    description: 'Stuffed paratha with a cheesy filling',
    price: 15.49,
  },
  {
    name: 'Onion Paratha',
    image: dish9,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Paratha filled with a savory onion mixture',
    price: 13.99,
  },
  {
    name: 'Garlic Naan',
    image: dish10,
    rating: '4.8',
    time: '25-35 mins',
    description: 'Naan flavored with garlic and butter',
    price: 16.99,
  },
];

const Paratha = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Paratha Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {parathaDishes.map((dish, index) => (
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

export default Paratha;
