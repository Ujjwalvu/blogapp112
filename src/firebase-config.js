import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB1QWSmnB-7FM-UsMwKImPiBTNatE31wQM",
  authDomain: "blogproject-a0518.firebaseapp.com",
  projectId: "blogproject-a0518",
  storageBucket: "blogproject-a0518.appspot.com",
  messagingSenderId: "512125558502",
  appId: "1:512125558502:web:1901294317f716915fe527"
};


 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();