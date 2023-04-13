import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXgGHogt6Zus7N4yeJPOrPJs17BswN_vk",
  authDomain: "mpcit-l.firebaseapp.com",
  projectId: "mpcit-l",
  storageBucket: "mpcit-l.appspot.com",
  messagingSenderId: "999016841316",
  appId: "1:999016841316:web:7e6740a75743535fc45f71",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
