// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnux1fpyTKZ9OZXXAX2waceafGVC5IQ58",
  authDomain: "the-cooks-corner.firebaseapp.com",
  projectId: "the-cooks-corner",
  storageBucket: "the-cooks-corner.appspot.com",
  messagingSenderId: "933576972228",
  appId: "1:933576972228:web:cfefd0ea66dd1e2738b691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;