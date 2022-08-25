import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApaBnxWRQIg7uQJW7C3uSro8g9MnrrG6g",
  authDomain: "idonotknow-24e63.firebaseapp.com",
  projectId: "idonotknow-24e63",
  storageBucket: "idonotknow-24e63.appspot.com",
  messagingSenderId: "506676398210",
  appId: "1:506676398210:web:867760c011cd777ddbcc9b"
};
  
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timeStamp = firebase.firestore.FieldValue.serverTimestamp();

  export {db,auth,timeStamp};