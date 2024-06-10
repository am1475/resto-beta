// src/components/NorthIndian.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/logo17.jpg';
import dish2 from '../images/logo2.jpg';
import dish3 from '../images/logo20.jpeg';
// Add more dish images as needed
import dish4 from '../images/logo21.jpg';
import dish5 from '../images/logo22.jpeg';
import dish6 from '../images/logo23.jpeg';
import dish7 from '../images/logo24.jpeg';
import dish8 from '../images/logo25.jpeg';
import dish9 from '../images/logo26.jpg';
import dish10 from '../images/logo27.jpeg';

const northIndianDishes = [
  {
    name: 'Butter Chicken',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'A rich and creamy dish made with marinated chicken cooked in a spiced tomato, butter, and cream sauce.',
    price: 15.99,
  },
  {
    name: 'Chicken Tikka',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Tender pieces of chicken marinated in spices and yogurt, grilled to perfection.',
    price: 12.99,
  },
  // Add more dishes as needed
  {
    name: 'Murg Musallam',
    image: dish3,
    rating: '4.6',
    time: '30-40 mins',
    description: 'A whole chicken marinated with a blend of spices and cooked to perfection.',
    price: 18.99,
  },
  {
    name: 'Chicken Pashtuni',
    image: dish4,
    rating: '4.5',
    time: '25-35 mins',
    description: 'Spicy and flavorful chicken dish with a unique Pashtuni flavor.',
    price: 14.99,
  },
  {
    name: 'Gosht Nihari',
    image: dish5,
    rating: '4.8',
    time: '35-45 mins',
    description: 'A slow-cooked stew of meat flavored with long pepper.',
    price: 16.99,
  },
  {
    name: 'Chicken Mughlai',
    image: dish6,
    rating: '4.7',
    time: '30-40 mins',
    description: 'A rich and creamy curry with Mughlai flavors.',
    price: 17.99,
  },
  {
    name: 'Chicken Do Pyaza',
    image: dish7,
    rating: '4.6',
    time: '25-35 mins',
    description: 'A classic North Indian dish with chicken and onions cooked in a rich gravy.',
    price: 13.99,
  },
  {
    name: 'Chicken Nawabi',
    image: dish8,
    rating: '4.5',
    time: '25-35 mins',
    description: 'A regal chicken dish cooked in a creamy and nutty sauce.',
    price: 15.99,
  },
  {
    name: 'Chicken Adraki',
    image: dish9,
    rating: '4.7',
    time: '25-35 mins',
    description: 'A spicy and flavorful chicken dish with a hint of ginger.',
    price: 14.99,
  },
  {
    name: 'Kadhai Chicken',
    image: dish10,
    rating: '4.6',
    time: '25-35 mins',
    description: 'A traditional chicken curry cooked in a kadhai with bell peppers and onions.',
    price: 12.99,
  }
];

const NorthIndian = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">North Indian Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {northIndianDishes.map((dish, index) => (
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

export default NorthIndian;
