import firebase from 'firebase';
import 'firebase/storage'; 
const firebaseConfig = {
  apiKey: "AIzaSyBi0aU79uJsu83R8ralfh0oALfpeiBdTcY",
  authDomain: "tour-travel-2266a.firebaseapp.com",
  databaseURL: "https://tour-travel-2266a-default-rtdb.firebaseio.com",
  projectId: "tour-travel-2266a",
  storageBucket: "tour-travel-2266a.appspot.com",
  messagingSenderId: "792156926724",
  appId: "1:792156926724:web:929392130fb86b2a601651",
  measurementId: "G-XL55B413ZW"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
// firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;