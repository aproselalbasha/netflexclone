// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3oT-SyJhA_AD4NqdZOotCQC9z-Jjn0ug",
  authDomain: "netflexgpt-54874.firebaseapp.com",
  projectId: "netflexgpt-54874",
  storageBucket: "netflexgpt-54874.firebasestorage.app",
  messagingSenderId: "662981994727",
  appId: "1:662981994727:web:e6ac101df798b7505b1a42",
  measurementId: "G-QWFRTBVDLW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
