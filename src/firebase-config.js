// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY4OVEM_sDJc0P8ZiaZO-3yGmSJxpOcTw",
  authDomain: "patient-portal-6e176.firebaseapp.com",
  projectId: "patient-portal-6e176",
  storageBucket: "patient-portal-6e176.appspot.com",
  messagingSenderId: "1006902395795",
  appId: "1:1006902395795:web:d844c061e17a2617285e66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
