// Requires the app to use the FB. containers method to initialize APP instance that reflects the APP instance online. It creates the instance based off some APP config
// This is the config that allows you to link app
// Fire Store is one of FB tools

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Importing Signin options 
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoz4Bs5h-zvIZdubdH1d_2xzkg0PgPsgY",
  authDomain: "crown-clothing-db-decbc.firebaseapp.com",
  projectId: "crown-clothing-db-decbc",
  storageBucket: "crown-clothing-db-decbc.appspot.com",
  messagingSenderId: "762039037805",
  appId: "1:762039037805:web:256283216b243afec8b464",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google auth provider. return a provider instance. this a class from FB auth. A class needs to be instatiated. Providers can be different for the saame app
// EG multiple Google sign in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Auth services should always be the same for the same APP
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);