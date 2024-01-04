import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6Uto26qhXgnLsQI-lVT1oS7khvZuIqn0",
  authDomain: "todoo-7ced9.firebaseapp.com",
  projectId: "todoo-7ced9",
  storageBucket: "todoo-7ced9.appspot.com",
  messagingSenderId: "388700283538",
  appId: "1:388700283538:web:08eb851fd926a41166bc4b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;