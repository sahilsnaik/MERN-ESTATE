// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38a40.firebaseapp.com",
  projectId: "mern-estate-38a40",
  storageBucket: "mern-estate-38a40.appspot.com",
  messagingSenderId: "917512212226",
  appId: "1:917512212226:web:48a334c16702ce191cfc1b",
  measurementId: "G-MQ941XWX3M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);