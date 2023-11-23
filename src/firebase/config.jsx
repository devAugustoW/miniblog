import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8M3La2sKWFnDzRlm8HFMQ-XKhAehAi2w",
    authDomain: "miniblog2-e321f.firebaseapp.com",
    projectId: "miniblog2-e321f",
    storageBucket: "miniblog2-e321f.appspot.com",
    messagingSenderId: "647025044370",
    appId: "1:647025044370:web:45c16d8c1e26e6ac5faf4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };