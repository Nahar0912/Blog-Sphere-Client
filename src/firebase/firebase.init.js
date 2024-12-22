// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOR7bONuECMRAH6JMaygGZXxqSeXXzcs8",
  authDomain: "blog-sphere-bca2f.firebaseapp.com",
  projectId: "blog-sphere-bca2f",
  storageBucket: "blog-sphere-bca2f.firebasestorage.app",
  messagingSenderId: "574045848211",
  appId: "1:574045848211:web:6107cbb5269bdcecb70366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;