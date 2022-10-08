import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5CTY4gATE-qzRzXFVBTT_63GoAMRgX6s",
  authDomain: "uploadimagemeubairro.firebaseapp.com",
  projectId: "uploadimagemeubairro",
  storageBucket: "uploadimagemeubairro.appspot.com",
  messagingSenderId: "1007858209653",
  appId: "1:1007858209653:web:641761552547510973f93c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);