import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAikbvMC1KdHUakAZTkYB8ivMVTd05HQjk",
    authDomain: "slack-clone-yt-4aef3.firebaseapp.com",
    projectId: "slack-clone-yt-4aef3",
    storageBucket: "slack-clone-yt-4aef3.appspot.com",
    messagingSenderId: "661664178689",
    appId: "1:661664178689:web:2cfc5f35ff290484279600"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider };