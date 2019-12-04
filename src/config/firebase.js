import * as firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4_aR2mB3bZPrgC-xhIYf1PxGMkYW6f0I",
  authDomain: "e-commerce-b288f.firebaseapp.com",
  databaseURL: "https://e-commerce-b288f.firebaseio.com",
  projectId: "e-commerce-b288f",
  storageBucket: "e-commerce-b288f.appspot.com",
  messagingSenderId: "1038741104816",
  appId: "1:1038741104816:web:22373832b42fcb82223375",
  measurementId: "G-DL5DJKQEJF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase
