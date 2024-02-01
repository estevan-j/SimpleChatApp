import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIRE_KEY}`,
  authDomain: "projectfronted.firebaseapp.com",
  projectId: "projectfronted",
  storageBucket: "projectfronted.appspot.com",
  messagingSenderId: "785259857535",
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Authentication configuration
export const auth = getAuth(app);//login
export const db = getFirestore(app);// fireDatabase