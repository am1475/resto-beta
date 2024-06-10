// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import '../App.css';
import googleLogo from '../images/logo30.png'; // Ensure this path is correct
import backgroundImage from '../images/bg2.jpg'; // Make sure you have this image in the specified path

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/landing');
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Welcome to Our Restaurant</h2>
        <p className="text-gray-600 mb-6">Sign in to enjoy the best dining experience</p>
        <button 
          onClick={handleGoogleLogin} 
          className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          <img src={googleLogo} alt="Google logo" className="h-6 w-6 mr-3" />
          <span className="font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
