import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyABEDPwwr_d-xRijmsg284gqRTgZxS5144",
  authDomain: "octave-8cf39.firebaseapp.com",
  projectId: "octave-8cf39",
  storageBucket: "octave-8cf39.appspot.com",
  messagingSenderId: "857029316650",
  appId: "1:857029316650:web:a23e18677e2f573a54f353",
  measurementId: "G-NEP5HM7CV4"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };