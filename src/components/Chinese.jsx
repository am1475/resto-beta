// src/components/Chinese.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/c1.jpeg';
import dish2 from '../images/c2.jpg';
import dish3 from '../images/c3.jpg';
import dish4 from '../images/c4.jpg';
import dish5 from '../images/c5.jpg';
import dish6 from '../images/c6.jpg';
import dish7 from '../images/c7.jpg';
import dish8 from '../images/c8.jpg';
import dish9 from '../images/c9.jpg';
import dish10 from '../images/c10.jpg';

const chineseDishes = [
  {
    name: 'Chicken Hakka Noodles',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Stir-fried noodles with chicken and vegetables',
    price: 15.99,
  },
  {
    name: 'Szechuan Chicken',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Spicy chicken dish with Szechuan sauce',
    price: 12.99,
  },
  {
    name: 'Sweet and Sour Chicken',
    image: dish3,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Chicken with a tangy sweet and sour sauce',
    price: 14.99,
  },
  {
    name: 'Kung Pao Chicken',
    image: dish4,
    rating: '4.8',
    time: '25-35 mins',
    description: 'Stir-fried chicken with peanuts and vegetables',
    price: 13.99,
  },
  {
    name: 'Vegetable Spring Rolls',
    image: dish5,
    rating: '4.4',
    time: '20-30 mins',
    description: 'Crispy spring rolls filled with mixed vegetables',
    price: 11.99,
  },
  {
    name: 'Chicken and Broccoli',
    image: dish6,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Tender chicken stir-fried with broccoli',
    price: 16.49,
  },
  {
    name: 'Shrimp Fried Rice',
    image: dish7,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Fried rice with shrimp and vegetables',
    price: 14.49,
  },
  {
    name: 'General Tso\'s Chicken',
    image: dish8,
    rating: '4.5',
    time: '25-35 mins',
    description: 'Sweet and spicy deep-fried chicken',
    price: 13.49,
  },
  {
    name: 'Hot and Sour Soup',
    image: dish9,
    rating: '4.3',
    time: '20-30 mins',
    description: 'Spicy and tangy soup with tofu and vegetables',
    price: 9.99,
  },
  {
    name: 'Chicken Manchurian',
    image: dish10,
    rating: '4.8',
    time: '25-35 mins',
    description: 'Chicken stir-fried with onions and a savory sauce',
    price: 17.99,
  },
];

const Chinese = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Chinese Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chineseDishes.map((dish, index) => (
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

export default Chinese;
