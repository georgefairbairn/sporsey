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
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      
      if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error);
          }
      }

      return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => (auth.signInWithPopup(provider));

  export default firebase;