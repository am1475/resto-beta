// src/components/Rolls.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import dish1 from '../images/r1.jpeg';
import dish2 from '../images/r2.jpg';
import dish3 from '../images/r3.jpeg';
import dish4 from '../images/r4.jpg';
import dish5 from '../images/r5.jpeg';
import dish6 from '../images/r6.jpeg';
import dish7 from '../images/r7.jpg';
import dish8 from '../images/r8.jpg';
import dish9 from '../images/r9.jpg';
import dish10 from '../images/r10.jpg';

const rollsDishes = [
  {
    name: 'Egg Roll',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Crispy roll filled with seasoned egg mixture',
    price: 15.99,
  },
  {
    name: 'Chicken Roll',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Delicious chicken wrapped in a flaky roll',
    price: 12.99,
  },
  {
    name: 'Paneer Roll',
    image: dish3,
    rating: '4.6',
    time: '20-30 mins',
    description: 'Spiced paneer rolled in a soft wrap',
    price: 13.99,
  },
  {
    name: 'Veggie Roll',
    image: dish4,
    rating: '4.4',
    time: '25-35 mins',
    description: 'Fresh vegetables wrapped in a crispy roll',
    price: 11.99,
  },
  {
    name: 'Double Egg Roll',
    image: dish5,
    rating: '4.8',
    time: '20-30 mins',
    description: 'Juicy chicken pieces wrapped in a soft roll',
    price: 17.99,
  },
  {
    name: 'Chicken Shawrma',
    image: dish6,
    rating: '4.3',
    time: '25-35 mins',
    description: 'Crispy roll filled with seasoned chicken fillet',
    price: 16.49,
  },
  {
    name: 'Turkish Shawrama',
    image: dish7,
    rating: '4.7',
    time: '20-30 mins',
    description: 'Delicious chicken wrapped in a flaky roll',
    price: 18.49,
  },
  {
    name: 'Lebanese Shawrama',
    image: dish8,
    rating: '4.6',
    time: '25-35 mins',
    description: 'Spiced chicken rolled in a soft wrap',
    price: 19.99,
  },
  {
    name: 'Chicken Burito',
    image: dish9,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Savory beef wrapped in a crispy roll',
    price: 14.99,
  },
  {
    name: 'Egyptian Shawrama',
    image: dish10,
    rating: '4.3',
    time: '25-35 mins',
    description: 'Tender turkey pieces in a delicious roll',
    price: 13.49,
  },
];

const Rolls = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Rolls Dishes</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rollsDishes.map((dish, index) => (
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

export default Rolls;
