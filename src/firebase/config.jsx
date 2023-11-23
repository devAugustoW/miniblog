import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8QfvGSSoJ29QfLn1MxXLMZ-EWUoTvcvo",
  authDomain: "miniblog-38a3b.firebaseapp.com",
  projectId: "miniblog-38a3b",
  storageBucket: "miniblog-38a3b.appspot.com",
  messagingSenderId: "555034670854",
  appId: "1:555034670854:web:d77ddf54c4bed338d65087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };