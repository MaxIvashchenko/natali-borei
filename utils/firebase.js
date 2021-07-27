import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDLFxv5pPnOe2_W3Ot6rFbGx7Pv7nQ3bAk",
    authDomain: "natali-borei.firebaseapp.com",
    projectId: "natali-borei",
    storageBucket: "natali-borei.appspot.com",
    messagingSenderId: "389827091498",
    appId: "1:389827091498:web:58009782237cca27ff7753",
    measurementId: "G-PVJYXJYQ12"
};
// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
}

const firestore = firebase.firestore();

export { firestore }
