// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYy2uObDAwiBBCEb_kWbVHOW_nLjsQAn4",
  authDomain: "resto-34669.firebaseapp.com",
  projectId: "resto-34669",
  storageBucket: "resto-34669.appspot.com",
  messagingSenderId: "555123444083",
  appId: "1:555123444083:web:2202289e891d43e464dd06",
  measurementId: "G-Z7L727HN76"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Set authentication persistence
setPersistence(auth, browserSessionPersistence);

export { auth, googleProvider };
