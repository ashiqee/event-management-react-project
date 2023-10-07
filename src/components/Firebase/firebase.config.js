// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIET_APIKEY,
  authDomain: import.meta.env.VIET_AUTHDOMAIN,
  projectId: import.meta.env.VIET_PROJECTID,
  storageBucket: import.meta.env.VIET_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VIET_MESSAGINGSENDERID,
  appId: import.meta.env.VIET_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
