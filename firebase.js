import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBkiHg0VQAY9VIOVfO1xzjfpmqWzs1Upkw",
    authDomain: "chatty-a428e.firebaseapp.com",
    projectId: "chatty-a428e",
    storageBucket: "chatty-a428e.appspot.com",
    messagingSenderId: "138769387354",
    appId: "1:138769387354:web:8ff77a901f11e64258ed63",
};

// const app = !firebase.apps.length
//     ? firebase.initializeApp(firebaseConfig)
//     : firebase.app();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };