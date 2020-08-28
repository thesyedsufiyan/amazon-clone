import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBKFbf2VMDDhB9sO3brNmm7m55SzAkzqjo",
    authDomain: "ama-zon-cl-one.firebaseapp.com",
    databaseURL: "https://ama-zon-cl-one.firebaseio.com",
    projectId: "ama-zon-cl-one",
    storageBucket: "ama-zon-cl-one.appspot.com",
    messagingSenderId: "387395227441",
    appId: "1:387395227441:web:974d2f9a10b1b2b0a3ea10",
    measurementId: "G-25W1SVNEJQ"
});

const auth = firebase.auth();

export { auth };