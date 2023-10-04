// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgAwFOKtvb0RvZAM-usz1-NkI2r3QxuY",
  authDomain: "buzu-3ae05.firebaseapp.com",
  projectId: "buzu-3ae05",
  storageBucket: "buzu-3ae05.appspot.com",
  messagingSenderId: "847829804641",
  appId: "1:847829804641:web:6d4e1228be254a5114ac20",
  measurementId: "G-M91EFP67MJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
