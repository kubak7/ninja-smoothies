import firebase from "firebase";
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBUbaYSkzLsxgL_wGl5TeYRTk9VrvsE2GY",
  authDomain: "udemy-ninja-smoothes.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothes.firebaseio.com",
  projectId: "udemy-ninja-smoothes",
  storageBucket: "udemy-ninja-smoothes.appspot.com",
  messagingSenderId: "788185994512",
  appId: "1:788185994512:web:0f6d88aa9024c77da04195"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database

export default firebaseApp.firestore()
