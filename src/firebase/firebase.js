import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALrF6dGlWrofcJ8vbBSi9aDhlT6kAnSqM",
  authDomain: "academic-course-main.firebaseapp.com",
  projectId: "academic-course-main",
  storageBucket: "academic-course-main.firebasestorage.app",
  messagingSenderId: "245088086728",
  appId: "1:245088086728:web:9486d53d88a76946a813fd",
  measurementId: "G-ZKSZH2V3XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};