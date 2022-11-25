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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// importoort database
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    collection,
    writeBatch
} from "firebase/firestore";

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
  prompt: "select_account",
});

// Auth services should always be the same for the same APP
export const auth = getAuth();

// Signin with Google account popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Signin with Redirect. This is because we instatiated just Google Provider
export const signInWithGoogleRedirect  = () => signInWithRedirect(auth, provider);


// can access the DB. directly points to the dp inside the FB console
export const db  = getFirestore();

export const createUserDocumentFromAuth =  async (userAuth, addition = {}) => {
  if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid );

    // Allows us to check if an instance of the data exists
    const userSnapshot = await getDoc(userDocRef);

    
     // if user doesn't exist, create new user
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...addition
            });
        } catch (error) {
            console.log('Error creating user', error);
        }

    }

    // check if user exists
    return userDocRef;
};

export const createAuthUserWithEmailAndPAssword =  async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const singInAuthUserWithEmailAndPAssword =  async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  // Store each document into the collection ref as a document

  // USE  THISa Batch for a successful transaction

  // create batch instance
  const batch = writeBatch(db);
  // create a bunch of set events for each doc
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();

  console.log('batch done')
} 