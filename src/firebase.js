
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAHHH5fbK47T2XgCuNfukpaq8MxS8mMYM8",
  authDomain: "react-portfolio-cf601.firebaseapp.com",
  projectId: "react-portfolio-cf601",
  storageBucket: "react-portfolio-cf601.appspot.com",
  messagingSenderId: "213416708462",
  appId: "1:213416708462:web:645b44db33bbe53a40997f",
  measurementId: "G-DGY8D1PY3S"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
