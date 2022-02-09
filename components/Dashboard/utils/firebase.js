import firebase from 'firebase';
import 'firebase/storage'; 
const firebaseConfig = {
  apiKey: "AIzaSyB1SQ3Dmv00cg8CAySLtxSMsarDdmjCIg4",
  authDomain: "tour-travel-revolution.firebaseapp.com",
  databaseURL: "https://tour-travel-revolution-default-rtdb.firebaseio.com",
  projectId: "tour-travel-revolution",
  storageBucket: "tour-travel-revolution.appspot.com",
  messagingSenderId: "802983505583",
  appId: "1:802983505583:web:5cb001a9049afa9b7dae5a",
  measurementId: "G-4LG3G0JGN3"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
// firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;