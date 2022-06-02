import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "house-marketplace-app-d6093.firebaseapp.com",
  projectId: "house-marketplace-app-d6093",
  storageBucket: "house-marketplace-app-d6093.appspot.com",
  messagingSenderId: "306155651630",
  appId: "1:306155651630:web:e93924d1f51963822915bf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()