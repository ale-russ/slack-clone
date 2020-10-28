import "firebase/firestore";
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL87ei7yxd8q_AGRY5iYJo56mOJHSFIgw",
  authDomain: "slack-clone-f638c.firebaseapp.com",
  databaseURL: "https://slack-clone-f638c.firebaseio.com",
  projectId: "slack-clone-f638c",
  storageBucket: "slack-clone-f638c.appspot.com",
  messagingSenderId: "447869103566",
  appId: "1:447869103566:web:137807cc8190094aad8f9f",
  measurementId: "G-BDBFSPGNPH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
