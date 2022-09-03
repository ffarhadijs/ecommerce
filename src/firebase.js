import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyJfPspqgVmXehlf17S0UgNqetfcnbhWk",
  authDomain: "eccomerce-shop.firebaseapp.com",
  projectId:"eccomerce-shop",
  storageBucket: "eccomerce-shop.appspot.com",
  messagingSenderId: "533577749350",
  appId:"1:533577749350:web:f3434566abf6c1f86daea7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
