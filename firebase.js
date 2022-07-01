import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkiHg0VQAY9VIOVfO1xzjfpmqWzs1Upkw",
    authDomain: "chatty-a428e.firebaseapp.com",
    projectId: "chatty-a428e",
    storageBucket: "chatty-a428e.appspot.com",
    messagingSenderId: "138769387354",
    appId: "1:138769387354:web:8ff77a901f11e64258ed63",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };