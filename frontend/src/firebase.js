// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , connectAuthEmulator,
  sendPasswordResetEmail,
  confirmPasswordReset} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMa88NjBCz_SJI2TD4RAenCCcXqZ1rgYU",
  authDomain: "final-c4f40.firebaseapp.com",
  databaseURL: "https://final-c4f40-default-rtdb.firebaseio.com",
  projectId: "final-c4f40",
  storageBucket: "final-c4f40.appspot.com",
  messagingSenderId: "570846204998",
  appId: "1:570846204998:web:197ce904435bc9ca926647",
  measurementId: "G-EFC1GFP23V"
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };