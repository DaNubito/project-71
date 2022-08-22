import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDF0j2nEAr-dISwwhXRTxrRlpnVT8wzTr8",
    authDomain: "rider-a6408.firebaseapp.com",
    projectId: "rider-a6408",
    storageBucket: "rider-a6408.appspot.com",
    messagingSenderId: "413547887254",
    appId: "1:413547887254:web:afadf14c91dade6b22a0b7"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
