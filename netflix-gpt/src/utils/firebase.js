// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQAXxsrvp8XaTZbLb3nz7CaNmK9qCsZhA",
  authDomain: "netflixgpt-99f26.firebaseapp.com",
  projectId: "netflixgpt-99f26",
  storageBucket: "netflixgpt-99f26.appspot.com",
  messagingSenderId: "749875740447",
  appId: "1:749875740447:web:82bbf5115082f72989ba2a",
  measurementId: "G-YJLF5PSP59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
