
import firebase from "firebase/compat/app";
import  'firebase/compat/auth'
import  'firebase/compat/firestore'
import  'firebase/compat/storage'


const firebaseConfig = {
    // apiKey: "AIzaSyDCc3oSqIsVkCDZMCNkUZygJSGXD1atQ2g",
    // authDomain: "reliveo-f50d4.firebaseapp.com",
    // projectId: "reliveo-f50d4",
    // storageBucket: "reliveo-f50d4.appspot.com",
    // messagingSenderId: "48363817579",
    // appId: "1:48363817579:web:9941499d32e55a4f41ff2e",
    // measurementId: "G-Y7W3HKTP7Z"


    apiKey: "AIzaSyDCc3oSqIsVkCDZMCNkUZygJSGXD1atQ2g",
    authDomain: "reliveo-f50d4.firebaseapp.com",
    projectId: "reliveo-f50d4",
    storageBucket: "reliveo-f50d4.appspot.com",
    messagingSenderId: "48363817579",
    appId: "1:48363817579:web:b78b0fdb38d3fe4141ff2e",
    measurementId: "G-0BN4EBR643"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}