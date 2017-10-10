import firebase from 'firebase';
import 'firebase/firestore/';

const config = {
  apiKey: "AIzaSyBeLSLnYcdpcDlMrl6tdNMHIFEOyiUdjZs",
  authDomain: "the-q-development.firebaseapp.com",
  databaseURL: "https://the-q-development.firebaseio.com",
  projectId: "the-q-development",
  storageBucket: "the-q-development.appspot.com",
  messagingSenderId: "212586293758"
};

firebase.initializeApp(config);

export default firebase;