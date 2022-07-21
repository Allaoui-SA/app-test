// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyDWPygioJQsppWyIl6BgXW-Vc9IqTBbA94",
  authDomain: "festiv-app.firebaseapp.com",
  databaseURL: "https://festiv-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "festiv-app",
  storageBucket: "festiv-app.appspot.com",
  messagingSenderId: "710021832342",
  appId: "1:710021832342:web:b14e138673ee3ba0ec2cb7",
  measurementId: "G-YS6KMXV69W"
})

export const auth = app.auth()
export default app