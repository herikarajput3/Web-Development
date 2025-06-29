import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDnVkp4r6rixI-58qBIDbbnnatKyw9AZxg",
    authDomain: "register-780bc.firebaseapp.com",
    projectId: "register-780bc",
    storageBucket: "register-780bc.firebasestorage.app",
    messagingSenderId: "287794630355",
    appId: "1:287794630355:web:6c8044cdbe7678e1590e26"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, db, storage };
