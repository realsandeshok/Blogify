// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-web-16efc.firebaseapp.com",
  projectId: "blog-web-16efc",
  storageBucket: "blog-web-16efc.appspot.com",
  messagingSenderId: "340449379523",
  appId: "1:340449379523:web:f6bbe29c282ad2b568ce76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
