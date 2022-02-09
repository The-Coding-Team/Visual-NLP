import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB9C3evyfVuh-0OsBOxb4VP8i6DuAfEtX4",
  authDomain: "visual-nlp-98135.firebaseapp.com",
  projectId: "visual-nlp-98135",
  storageBucket: "visual-nlp-98135.appspot.com",
  messagingSenderId: "116160273525",
  appId: "1:116160273525:web:36a7c02c0cead3216dac3c",
  measurementId: "G-FPM5XXW2SK",
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
