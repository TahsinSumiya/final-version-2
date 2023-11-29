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
  apiKey: "AIzaSyAGP8rdoDRgtgSeXwgprhqHJp-7yp04Guo",
  authDomain: "devcommunity-621e5.firebaseapp.com",
  projectId: "devcommunity-621e5",
  storageBucket: "devcommunity-621e5.appspot.com",
  messagingSenderId: "825220289289",
  appId: "1:825220289289:web:a1df50a7c9d8379984f9d8",
  measurementId: "G-3V8EM1B2CC"
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };