// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzBT3HLasqvnzwahQHXCUPEyaEFxv5R_I",
    authDomain: "netflix-clone2-c8f46.firebaseapp.com",
    projectId: "netflix-clone2-c8f46",
    storageBucket: "netflix-clone2-c8f46.appspot.com",
    messagingSenderId: "207618285122",
    appId: "1:207618285122:web:a0cbc9ca983b84e5fa17db"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }