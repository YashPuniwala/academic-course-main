import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJqcdgiq1qhiAXxTXWhwpzxYdce-gOITQ",
  authDomain: "academic-course-main-a5b2c.firebaseapp.com",
  projectId: "academic-course-main-a5b2c",
  storageBucket: "academic-course-main-a5b2c.firebasestorage.app",
  messagingSenderId: "103360576154",
  appId: "1:103360576154:web:8fa855f6778be8ea82fd23",
  measurementId: "G-GR72T5BE9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};