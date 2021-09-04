import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBsfcm5UjKHRBDuQl3_Qrur1KgMoMgbqkk",
  authDomain: "gki-assignment.firebaseapp.com",
  projectId: "gki-assignment",
  storageBucket: "gki-assignment.appspot.com",
  messagingSenderId: "1074755413586",
  appId: "1:1074755413586:web:2503aa4f2decf9744ce18b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
