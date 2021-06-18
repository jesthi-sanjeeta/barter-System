import firebase from 'firebase';
require ('@firebase/firestore')

/*var firebaseConfig = {
  apiKey: "AIzaSyCyNMeQPTHJgIaE03WqIsmpYUFQ6U02gUM",
  authDomain: "barter-system-35e1b.firebaseapp.com",
  projectId: "barter-system-35e1b",
  storageBucket: "barter-system-35e1b.appspot.com",
  messagingSenderId: "398414119028",
  appId: "1:398414119028:web:ff74d365987107e0961121"
};*/

var firebaseConfig = {
  apiKey: "AIzaSyDeFhWV3rN2nGlU5eF88XNzZTXnxKJA3eE",
  authDomain: "bartersystem-75148.firebaseapp.com",
  projectId: "bartersystem-75148",
  storageBucket: "bartersystem-75148.appspot.com",
  messagingSenderId: "891767570763",
  appId: "1:891767570763:web:8f53693d295347366528ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();