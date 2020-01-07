import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBgvli8kpWMJkIp5xVRnvMkA6w6D9qcHZw",
  authDomain: "authentication3-a804f.firebaseapp.com",
  databaseURL: "https://authentication3-a804f.firebaseio.com",
  projectId: "authentication3-a804f",
  storageBucket: "authentication3-a804f.appspot.com",
  messagingSenderId: "626813518390",
  appId: "1:626813518390:web:3db4080b26f1c7e0a88e97"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
