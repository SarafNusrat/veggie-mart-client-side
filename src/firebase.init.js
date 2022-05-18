// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDZ2Q09A3VuCntN2C9-klC58jwerGEX8B0",
  authDomain: "veggie-mart-2591f.firebaseapp.com",
  projectId: "veggie-mart-2591f",
  storageBucket: "veggie-mart-2591f.appspot.com",
  messagingSenderId: "12475262933",
  appId: "1:12475262933:web:1a45c196ee5b1f882d3f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

