import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyCl8VuLHEvTeQqXdMy-YRO44tlKC5kfv7c",
  authDomain: "ecommercetest-1705b.firebaseapp.com",
  projectId: "ecommercetest-1705b",
  storageBucket: "ecommercetest-1705b.appspot.com",
  messagingSenderId: "373902165751",
  appId: "1:373902165751:web:9519a9c0892cb84cf3f5f2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);