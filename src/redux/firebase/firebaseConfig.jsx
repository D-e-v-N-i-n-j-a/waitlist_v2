import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUQCQ69TjnuJ6HCf4LBF6c2XYnvlOdMJw",
  authDomain: "tonitel-3b792.firebaseapp.com",
  projectId: "tonitel-3b792",
  storageBucket: "tonitel-3b792.appspot.com",
  messagingSenderId: "237234335591",
  appId: "1:237234335591:web:0611763715229e9d5209c2",
  measurementId: "G-WRCJ36VG87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export default db;
