// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv_FYeE7bpbT2UXgHxN6pqk2jn4c38W5s",
  authDomain: "demoss-41e65.firebaseapp.com",
  projectId: "demoss-41e65",
  storageBucket: "demoss-41e65.firebasestorage.app",
  messagingSenderId: "313003411852",
  appId: "1:313003411852:web:f1ffdffecda76e6f85aea9",
  measurementId: "G-70J93RRR76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
