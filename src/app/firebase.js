// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfq0kM_Q39PYI2Idq9BEFJr2P3RcnVBKE",
  authDomain: "resumify-1.firebaseapp.com",
  projectId: "resumify-1",
  storageBucket: "resumify-1.appspot.com",
  messagingSenderId: "218199055262",
  appId: "1:218199055262:web:012b1e8ee8d0a984f8148f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
