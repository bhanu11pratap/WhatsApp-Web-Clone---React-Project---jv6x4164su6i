
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGyt28Bt-Y-vd23iQ5bSUG_ry4YqhuKFg",
  authDomain: "my-project-3199a.firebaseapp.com",
  projectId: "my-project-3199a",
  storageBucket: "my-project-3199a.appspot.com",
  messagingSenderId: "291996017220",
  appId: "1:291996017220:web:6078655c9d4e13ba89d211",
  measurementId: "G-REBS4TRKQB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
