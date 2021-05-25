import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdpvI77CRjT_go6p7qbwtKJyQuXvd7NrI",
    authDomain: "instagram-clone-bb2ed.firebaseapp.com",
    projectId: "instagram-clone-bb2ed",
    storageBucket: "instagram-clone-bb2ed.appspot.com",
    messagingSenderId: "862793816519",
    appId: "1:862793816519:web:8d4507e9589fa537bb21e2",
    measurementId: "G-ZPBLBD68YL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };