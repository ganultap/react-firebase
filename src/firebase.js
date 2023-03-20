// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdowk2HPOd6DZWbHBOIURqZxoNtRFvc-k",
  authDomain: "bcdeo-71862.firebaseapp.com",
  projectId: "bcdeo-71862",
  storageBucket: "bcdeo-71862.appspot.com",
  messagingSenderId: "182170701296",
  appId: "1:182170701296:web:b00535e1ba4f34e4ab2135",
  measurementId: "G-0MVH8VF08X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);
