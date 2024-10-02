// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN7DPb0-kdkOw2YovmPO13hnv4bMuuR3k",
  authDomain: "netflixgpt-2cf9b.firebaseapp.com",
  projectId: "netflixgpt-2cf9b",
  storageBucket: "netflixgpt-2cf9b.appspot.com",
  messagingSenderId: "912543567422",
  appId: "1:912543567422:web:41406fb1255bfc8c828b6f",
  measurementId: "G-R895RK99QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();