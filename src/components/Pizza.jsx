// src/components/Pizza.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/p1.jpg';
import dish2 from '../images/p2.jpeg';
import dish3 from '../images/p3.jpeg';
import dish4 from '../images/p4.jpeg';
import dish5 from '../images/p5.jpeg';
import dish6 from '../images/p6.jpg';
import dish7 from '../images/p7.jpg';
import dish8 from '../images/p8.jpg';
import dish9 from '../images/p9.jpg';
import dish10 from '../images/p10.jpg';

const pizzaDishes = [
  {
    name: 'Margherita Pizza',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'A classic delight with 100% real mozzarella cheese',
    price: 15.99,
  },
  {
    name: 'Paneer Tikka Pizza',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Delicious paneer tikka with a spicy twist',
    price: 12.99,
  },
  {
    name: 'Pepperoni Pizza',
    image: dish3,
    rating: '4.8',
    time: '20-30 mins',
    description: 'Pepperoni and mozzarella cheese with a zesty sauce',
    price: 16.99,
  },
  {
    name: 'Veggie Supreme Pizza',
    image: dish4,
    rating: '4.6',
    time: '25-35 mins',
    description: 'Loaded with fresh vegetables and mozzarella cheese',
    price: 14.99,
  },
  {
    name: 'BBQ Chicken Pizza',
    image: dish5,
    rating: '4.9',
    time: '20-30 mins',
    description: 'Grilled chicken with tangy BBQ sauce and mozzarella cheese',
    price: 17.99,
  },
  {
    name: 'Hawaiian Pizza',
    image: dish6,
    rating: '4.3',
    time: '20-30 mins',
    description: 'Ham and pineapple with mozzarella cheese',
    price: 15.49,
  },
  {
    name: 'Mexican Green Wave Pizza',
    image: dish7,
    rating: '4.5',
    time: '25-35 mins',
    description: 'A Mexican fiesta with jalapenos, onions, and tomatoes',
    price: 14.49,
  },
  {
    name: 'Deluxe Veggie Pizza',
    image: dish8,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Packed with bell peppers, olives, and mushrooms',
    price: 13.99,
  },
  {
    name: 'Chicken Dominator Pizza',
    image: dish9,
    rating: '4.8',
    time: '20-30 mins',
    description: 'Loaded with juicy chicken chunks and mozzarella cheese',
    price: 18.99,
  },
  {
    name: 'Cheese N Corn Pizza',
    image: dish10,
    rating: '4.4',
    time: '20-30 mins',
    description: 'Sweet corn and cheese for a delightful combination',
    price: 12.49,
  },
];

const Pizza = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Pizza Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pizzaDishes.map((dish, index) => (
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

export default Pizza;
