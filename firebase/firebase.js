import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHqebg7TZpnMDd-mEKZihia9-u7hCjlgg",
    authDomain: "busbooking-479b1.firebaseapp.com",
    projectId: "busbooking-479b1",
    storageBucket: "busbooking-479b1.appspot.com",
    messagingSenderId: "750297737631",
    appId: "1:750297737631:web:44c376cf50c586af64b5aa",
    measurementId: "G-8RY98DSCW7"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);