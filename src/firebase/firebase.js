import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBURz5mTClrsY6E68gdA-GAlrjUSFd8waA",
  authDomain: "academia-course-main.firebaseapp.com",
  projectId: "academia-course-main",
  storageBucket: "academia-course-main.firebasestorage.app",
  messagingSenderId: "380696875882",
  appId: "1:380696875882:web:e5250cf20fbcb1e84d4b13",
  measurementId: "G-D4S71WVYH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};