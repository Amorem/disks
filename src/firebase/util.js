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

export default firebase;
