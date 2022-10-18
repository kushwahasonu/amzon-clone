import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-dnGqgK93h0NajyR1gxJzQmTrdpxxj1g",
    authDomain: "clone-161dc.firebaseapp.com",
    databaseURL: "https://clone-161dc-default-rtdb.firebaseio.com",
    projectId: "clone-161dc",
    storageBucket: "clone-161dc.appspot.com",
    messagingSenderId: "219694988104",
    appId: "1:219694988104:web:df504254950a2f9329517d",
    measurementId: "G-P4BTXWYZG0"
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();


  export { db, auth };