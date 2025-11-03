// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwM6bYlWhTaMEGGC61rhAKDLTaUkiPdzk",
  authDomain: "birthday-f70ab.firebaseapp.com",
  projectId: "birthday-f70ab",
  storageBucket: "birthday-f70ab.appspot.com",  
  messagingSenderId: "540378444726",
  appId: "1:540378444726:web:20bbf0ce1f97cdf70a0717",
  measurementId: "G-32X01CMT27" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
