// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCou-VH3W2f5sQWXrKeZAHLTnFTr_qnJTg",
  authDomain: "my-portfolio-9ce69.firebaseapp.com",
  projectId: "my-portfolio-9ce69",
  storageBucket: "my-portfolio-9ce69.appspot.com",
  messagingSenderId: "877500947393",
  appId: "1:877500947393:web:e117dd32c9d08f90ec6d40",
  measurementId: "G-Y0S63F5D6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);