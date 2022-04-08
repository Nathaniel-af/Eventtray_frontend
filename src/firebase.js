// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHu8jX1BWGCBL2YOHlVFAVWEI-0Vo4l_8",
  authDomain: "eventtray-a6004.firebaseapp.com",
  projectId: "eventtray-a6004",
  storageBucket: "eventtray-a6004.appspot.com",
  messagingSenderId: "956705600331",
  appId: "1:956705600331:web:f922f7e3c5ca91f4eeeece",
  measurementId: "G-KVRBYZ1FKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
