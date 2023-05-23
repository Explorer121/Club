// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC1-JvhfECtmpRVf6jg1d-QU_p3lS-ruv0",
  authDomain: "mcity-e938c.firebaseapp.com",
  projectId: "mcity-e938c",
  storageBucket: "mcity-e938c.appspot.com",
  messagingSenderId: "704111644191",
  appId: "1:704111644191:web:cc1b19ddeb79976fc00f2a",
  measurementId: "G-JP9XE45K3H"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {
  firebase
}