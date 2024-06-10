import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo0 from '../images/logo0.png';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setIsLoggedIn(true);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setShowMobileMenu(false); // Hide mobile menu when the route changes
  }, [location]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img src={logo0} alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">Restaurant</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <HashLink smooth to="/#home" className={`py-4 px-2 ${location.hash === '#home' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold'}`}>Home</HashLink>
              <HashLink smooth to="/#about" className={`py-4 px-2 ${location.hash === '#about' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold'}`}>About</HashLink>
              <HashLink smooth to="/#features" className={`py-4 px-2 ${location.hash === '#features' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold'}`}>Features</HashLink>
              <HashLink smooth to="/#contact" className={`py-4 px-2 ${location.hash === '#contact' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold'}`}>Contact</HashLink>
              {isLoggedIn && (
                <Link to="/landing" className={`py-4 px-2 ${location.pathname === '/landing' ? 'text-green-500 border-b-4 border-green-500 font-semibold' : 'text-gray-500 font-semibold'}`}>Menu</Link>
              )}
              <Link to="/cart" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </Link>
              {currentUser ? (
                <button onClick={handleLogout} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Logout</button>
              ) : (
                <Link to="/login" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Login</Link>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${showMobileMenu ? 'block' : 'hidden'}`}>
        <ul className="">
          <li className="active"><HashLink smooth to="/#home" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</HashLink></li>
          <li><HashLink smooth to="/#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</HashLink></li>
          <li><HashLink smooth to="/#features" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Features</HashLink></li>
          <li><HashLink smooth to="/#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</HashLink></li>
          {isLoggedIn && (
            <li><Link to="/landing" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Landing</Link></li>
          )}
          <li><Link to="/cart" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</Link></li>
          {currentUser ? (
            <li><button onClick={handleLogout} className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Logout</button></li>
          ) : (
            <li><Link to="/login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
