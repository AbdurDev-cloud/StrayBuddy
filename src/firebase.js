// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAE8LFJjaWCt3esafLSMhTZ6oAtPDaBfyw",
  authDomain: "netflix-clone-8e73e.firebaseapp.com",
  projectId:  "netflix-clone-8e73e",
  storageBucket:  "netflix-clone-8e73e.firebasestorage.app",
  messagingSenderId: "602441528395",
  appId: "1:602441528395:web:85b2da726c17cc6a29c9ce",
   measurementId: "G-KCQEL1746S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
