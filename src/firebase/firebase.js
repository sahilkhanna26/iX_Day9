// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv6vVJS37mNSDotTTMMVm8APCa7VgpWHw",
  authDomain: "ix-task-list.firebaseapp.com",
  projectId: "ix-task-list",
  storageBucket: "ix-task-list.appspot.com",
  messagingSenderId: "159004633538",
  appId: "1:159004633538:web:b8d2ab3a995feb31cb4e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
    db
};