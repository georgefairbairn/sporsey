import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJ_jIhfMmg3qK1DmSalI1YBd8XNK43McI",
    authDomain: "sporsey-db.firebaseapp.com",
    databaseURL: "https://sporsey-db.firebaseio.com",
    projectId: "sporsey-db",
    storageBucket: "",
    messagingSenderId: "252011928826",
    appId: "1:252011928826:web:af32f8ad2e902b78d5bd43",
    measurementId: "G-4SXNP3CN96"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => (auth.signInWithPopup(provider));

  export default firebase;