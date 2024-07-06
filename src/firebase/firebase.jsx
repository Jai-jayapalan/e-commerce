// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAw-GveZgtM4AWCBLZqpadwjCKJ4xk--E",
  authDomain: "e-commerce-fe90d.firebaseapp.com",
  projectId: "e-commerce-fe90d",
  storageBucket: "e-commerce-fe90d.appspot.com",
  messagingSenderId: "969983870122",
  appId: "1:969983870122:web:5f82c674be5a73bdb67cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;