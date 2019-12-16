 import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhDZKhpAPGD914vw0X2pALPjfLwD1ADag",
    authDomain: "bradbourne-admin-panel.firebaseapp.com",
    databaseURL: "https://bradbourne-admin-panel.firebaseio.com",
    projectId: "bradbourne-admin-panel",
    storageBucket: "bradbourne-admin-panel.appspot.com",
    messagingSenderId: "440707110565",
    appId: "1:440707110565:web:eeaa979f4227395a1b9f4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;