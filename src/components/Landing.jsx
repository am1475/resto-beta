import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo10 from '../images/logo10.jpeg';
import logo11 from '../images/logo11.jpg';
import logo12 from '../images/logo12.jpg';
import logo13 from '../images/logo13.jpg';
import logo14 from '../images/logo14.jpg';
import logo15 from '../images/logo15.jpeg';
import logo16 from '../images/logo16.jpg';
import dish1 from '../images/logo17.jpg';
import dish2 from '../images/logo19.jpeg';
import dish3 from '../images/logo18.jpg';
import dish4 from '../images/logo4.jpg';
import { CartContext } from '../contexts/CartContext';

const cuisines = [
  { name: 'North Indian', image: logo10, path: '/north-indian' },
  { name: 'Biryani', image: logo11, path: '/biryani' },
  { name: 'Pizza', image: logo12, path: '/pizza' },
  { name: 'Kebab', image: logo13, path: '/kebab' },
  { name: 'Rolls', image: logo14, path: '/rolls' },
  { name: 'Paratha', image: logo15, path: '/paratha' },
  { name: 'Chinese', image: logo16, path: '/chinese' },
];

const specialDishes = [
  {
    name: 'Butter Chicken',
    image: dish1,
    rating: '4.5',
    time: '20-30 mins',
    description: 'Rich and creamy butter chicken with a hint of spices',
    price: 15.99,
  },
  {
    name: 'Chicken Tandoori',
    image: dish2,
    rating: '4.7',
    time: '25-35 mins',
    description: 'Juicy and spicy chicken tandoori with smoky flavor',
    price: 12.99,
  },
  {
    name: 'Paneer Tikka',
    image: dish3,
    rating: '4.6',
    time: '15-25 mins',
    description: 'Soft paneer chunks marinated and grilled to perfection',
    price: 10.99,
  },
  {
    name: 'Veg Biryani',
    image: dish4,
    rating: '4.4',
    time: '30-40 mins',
    description: 'Flavorful veg biryani with aromatic spices and herbs',
    price: 9.99,
  },
  // Add more dish data as needed
];

const Landing = () => {
  const { addToCart, message, showMessage } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      {/* Cuisines Section */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">What's on your mind?</h2>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="text-center cursor-pointer mb-4 sm:mb-0"
              onClick={() => navigate(cuisine.path)}
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="text-sm sm:text-xl font-semibold">{cuisine.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Special Dishes Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Today's Special Dishes</h2>
        {showMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">{message}</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="h-40 sm:h-52 overflow-hidden rounded-t-lg mb-4">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{dish.name}</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm">{dish.rating} <span className="text-green-500">★</span></span>
                    <span className="text-gray-600 text-sm ml-2 sm:ml-4">{dish.time}</span>
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
    </div>
  );
};

export default Landing;
