import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1MDSL73kmXVfzhgNrpLAO8oE8r4LSxhU",
    authDomain: "firbase-quiz.firebaseapp.com",
    projectId: "firbase-quiz",
    storageBucket: "firbase-quiz.appspot.com",
    messagingSenderId: "700366518030",
    appId: "1:700366518030:web:72959909d278a4e677895f",
    measurementId: "G-8KWEVLBRW6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);