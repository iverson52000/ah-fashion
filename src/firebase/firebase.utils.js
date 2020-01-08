import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCggvAdgNKISbjaI_bJXpyAGo7ngyYVXQU",
    authDomain: "ah-db-a3cc9.firebaseapp.com",
    databaseURL: "https://ah-db-a3cc9.firebaseio.com",
    projectId: "ah-db-a3cc9",
    storageBucket: "ah-db-a3cc9.appspot.com",
    messagingSenderId: "676015936385",
    appId: "1:676015936385:web:0f091893e0325d71580e80",
    measurementId: "G-6WM8T9Q00Z"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;