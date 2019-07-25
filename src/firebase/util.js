import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTMGM7u9AN81tAQphDtZ7cGElimiomifI",
  authDomain: "disks-dev.firebaseapp.com",
  databaseURL: "https://disks-dev.firebaseio.com",
  projectId: "disks-dev",
  storageBucket: "",
  messagingSenderId: "1090096235785",
  appId: "1:1090096235785:web:ff12f7fe440f03e2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};

export default firebase;
