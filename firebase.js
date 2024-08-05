// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ9wliBN8ffwH20GpgTZBU8nj5W0E9VTc",
  authDomain: "inventory-management-94c58.firebaseapp.com",
  projectId: "inventory-management-94c58",
  storageBucket: "inventory-management-94c58.appspot.com",
  messagingSenderId: "734313045622",
  appId: "1:734313045622:web:1abdbae93cbd0847cec957",
  measurementId: "G-X96X2BGFVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}