import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA0MdPlhzA6Ap1ldKbDScUopx6j3_MGmzY",
  authDomain: "dayplanner-df160.firebaseapp.com",
  projectId: "dayplanner-df160",
  storageBucket: "dayplanner-df160.appspot.com",
  messagingSenderId: "773854144030",
  appId: "1:773854144030:web:04808181a52f8f9a6bf00f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export { db  };