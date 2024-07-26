// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-52ce0.firebaseapp.com",
    projectId: "real-estate-52ce0",
    storageBucket: "real-estate-52ce0.appspot.com",
    messagingSenderId: "417567388346",
    appId: "1:417567388346:web:44d7f33392efd4e5618883"
};

export const app = initializeApp(firebaseConfig);