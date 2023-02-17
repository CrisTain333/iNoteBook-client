// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM7zmhWU8O7Mo2PDxSQST0arbcFGZiNKU",
  authDomain: "inote-book.firebaseapp.com",
  projectId: "inote-book",
  storageBucket: "inote-book.appspot.com",
  messagingSenderId: "685812560543",
  appId: "1:685812560543:web:85ab4d1a4dc0e51de168aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
