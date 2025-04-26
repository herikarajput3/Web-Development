import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmRnRyrJ2YAHemMy1N5zWUovXMPx4Dn_8",
    authDomain: "e-commerce-registration.firebaseapp.com",
    projectId: "e-commerce-registration",
    storageBucket: "e-commerce-registration.firebasestorage.app",
    messagingSenderId: "351940114947",
    appId: "1:351940114947:web:354f639a1ae3f567faac36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };