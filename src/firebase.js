// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-2Bc_BOU0zFMqYa2WS8EOU2oF5ru4r4",
  authDomain: "fir-authenticate-1a0ef.firebaseapp.com",
  projectId: "fir-authenticate-1a0ef",
  storageBucket: "fir-authenticate-1a0ef.appspot.com",
  messagingSenderId: "667902362901",
  appId: "1:667902362901:web:e3302b40f076eb537e551c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;