import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCwV9Q_vPOaBMXAv92tte-ZccR2DcQb_HE",
  authDomain: "guts-hack.firebaseapp.com",
  databaseURL: "https://guts-hack.firebaseio.com",
  projectId: "guts-hack",
  storageBucket: "guts-hack.appspot.com",
  messagingSenderId: "1065030516068",
  appId: "1:1065030516068:web:fcbccddc196a9d150b4e71",
  measurementId: "G-QBE1J22VF9"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export {
  firestore,
  storage
};
