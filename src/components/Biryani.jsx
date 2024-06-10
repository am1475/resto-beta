// src/components/Biryani.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/b1.jpeg';
import dish2 from '../images/b2.jpg';
import dish3 from '../images/b3.jpeg';
import dish4 from '../images/b4.jpeg';
import dish5 from '../images/b5.jpg';
import dish6 from '../images/b6.jpeg';
import dish7 from '../images/b7.jpeg';
import dish8 from '../images/b8.jpg';
import dish9 from '../images/b9.jpeg';
import dish10 from '../images/b10.jpg';

const biryaniDishes = [
  {
    name: 'Hyderabad Biryani',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'A delicious blend of spices and tender meat.',
    price: 15.99,
  },
  {
    name: 'Mughlai Biryani',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Rich and flavorful Mughlai Biryani with exotic spices.',
    price: 12.99,
  },
  {
    name: 'Kolkata Biryani',
    image: dish3,
    rating: '4.6',
    time: '30-40 mins',
    description: 'Fragrant and mildly spiced Kolkata Biryani.',
    price: 14.99,
  },
  {
    name: 'Lucknowi Biryani',
    image: dish4,
    rating: '4.8',
    time: '25-35 mins',
    description: 'Aromatic Lucknowi Biryani with saffron and kewra.',
    price: 16.99,
  },
  {
    name: 'Dindigul Biryani',
    image: dish5,
    rating: '4.4',
    time: '20-30 mins',
    description: 'Spicy and tangy Dindigul Biryani from Tamil Nadu.',
    price: 13.99,
  },
  {
    name: 'Bombay Biryani',
    image: dish6,
    rating: '4.5',
    time: '30-40 mins',
    description: 'Bombay Biryani with potatoes and rich masala.',
    price: 15.49,
  },
  {
    name: 'Thalassery Biryani',
    image: dish7,
    rating: '4.6',
    time: '25-35 mins',
    description: 'Kerala’s special Thalassery Biryani with unique flavors.',
    price: 14.49,
  },
  {
    name: 'Sindhi Biryani',
    image: dish8,
    rating: '4.7',
    time: '35-45 mins',
    description: 'Spicy and tangy Sindhi Biryani with tomatoes and potatoes.',
    price: 16.49,
  },
  {
    name: 'Malabar Biryani',
    image: dish9,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Traditional Malabar Biryani with rich spices.',
    price: 14.49,
  },
  {
    name: 'Ambur Biryani',
    image: dish10,
    rating: '4.5',
    time: '25-35 mins',
    description: 'Delicious Ambur Biryani with a distinct flavor.',
    price: 15.49,
  },
];

const Biryani = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Biryani Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {biryaniDishes.map((dish, index) => (
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

export default Biryani;
