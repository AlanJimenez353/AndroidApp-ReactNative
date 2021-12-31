// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCA_nPbgLe-bB67eGJTAemKj2Ppn5Tumb4",
  authDomain: "react-native-e3f7b.firebaseapp.com",
  projectId: "react-native-e3f7b",
  storageBucket: "react-native-e3f7b.appspot.com",
  messagingSenderId: "701756000509",
  appId: "1:701756000509:web:6384933c81f34628ef9694"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

//Autenticacion de Usuarios
export const auth=getAuth(app)