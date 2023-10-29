// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseAuthConfig } from "@/config/secret";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FirebaseAuthConfig.FIREBASE_API_KEY,
  authDomain: FirebaseAuthConfig.FIREBASE_AUTH_DOMAIN,
  projectId: FirebaseAuthConfig.FIREBASE_PROJECT_ID,
  storageBucket: FirebaseAuthConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FirebaseAuthConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: FirebaseAuthConfig.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
