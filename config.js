import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAbwIKz4N5gxzByYO10oLG2c4U5RDLCWEY",
  authDomain: "wily-f2fc7.firebaseapp.com",
  projectId: "wily-f2fc7",
  storageBucket: "wily-f2fc7.appspot.com",
  messagingSenderId: "141123574752",
  appId: "1:141123574752:web:227f033bb693b187d3a985",
  measurementId: "G-XZKG6NNZNL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
