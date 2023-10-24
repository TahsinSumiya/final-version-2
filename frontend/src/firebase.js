// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjhZ8-6HeBg2yvFZM76yrpAatiIqV0JxU",
  authDomain: "final-c4f40.firebaseapp.com",
  databaseURL: "https://final-c4f40-default-rtdb.firebaseio.com",
  projectId: "final-c4f40",
  storageBucket: "final-c4f40.appspot.com",
  messagingSenderId: "570846204998",
  appId: "1:570846204998:web:1b4ac0514b7e9a17926647",
  measurementId: "G-ZRXHSV31FH",
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };