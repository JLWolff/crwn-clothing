import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCmINxtiI1lt72lkqtRTAv6CLXKrthEX9c",
    authDomain: "crwn-db-ce347.firebaseapp.com",
    databaseURL: "https://crwn-db-ce347.firebaseio.com",
    projectId: "crwn-db-ce347",
    storageBucket: "crwn-db-ce347.appspot.com",
    messagingSenderId: "44133504639",
    appId: "1:44133504639:web:8570487ca77df563dfd14a",
    measurementId: "G-QRH3DR1VZJ"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;