 import firebase from 'firebase/app'

 require("firebase/auth");
 require("firebase/firestore");
 require("firebase/storage");
 require("firebase/functions");

 // Your web app's Firebase configuration
 var config = {
  apiKey: "AIzaSyAGfilNheOLTgFE52RMFiQm-VJALMK8yPA",
  authDomain: "reciclasmart-4e62a.firebaseapp.com",
  databaseURL: "https://reciclasmart-4e62a.firebaseio.com",
  projectId: "reciclasmart-4e62a",
  storageBucket: "reciclasmart-4e62a.appspot.com",
  messagingSenderId: "342773278749",
  appId: "1:342773278749:web:b135134276e248cb797ef4",
  measurementId: "G-GKMHJZ9E5H"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  const auth= firebase.auth()
  const db = firebase.firestore()
  const storage= firebase.storage()
  const functions = firebase.functions()

  export {
    firebase,
    auth,
    db,
    storage,
    functions
  }