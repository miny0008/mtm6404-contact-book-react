import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi7n6WcVfgnzavTijvR3vvmFJOkPYYams",
  authDomain: "contact-book-dd1a3.firebaseapp.com",
  projectId: "contact-book-dd1a3",
  storageBucket: "contact-book-dd1a3.firebasestorage.app",
  messagingSenderId: "225280366553",
  appId: "1:225280366553:web:1c083c048b2ec69b98ebc8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };