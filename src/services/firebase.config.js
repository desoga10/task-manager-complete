import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAyTA36H3TE10mqUAw4RPKr-liYbF--1bw",
  authDomain: "tasker-c673c.firebaseapp.com",
  projectId: "tasker-c673c",
  storageBucket: "tasker-c673c.appspot.com",
  messagingSenderId: "462533215530",
  appId: "1:462533215530:web:3b90f1c17f5ae8adce8a53"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);