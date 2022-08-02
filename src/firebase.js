// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeUmS4_Br5poGBP5mOHP4v2qN9956eHnc',
  authDomain: 'todo-firebase-22383.firebaseapp.com',
  projectId: 'todo-firebase-22383',
  storageBucket: 'todo-firebase-22383.appspot.com',
  messagingSenderId: '180621548863',
  appId: '1:180621548863:web:b46b2a5c40f125fdb4878a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
