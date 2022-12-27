import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQUweSwduPtFgFj0MKtmwF9Th_AX_7uso",
  authDomain: "auth-dev-151a2.firebaseapp.com",
  projectId: "auth-dev-151a2",
  storageBucket: "auth-dev-151a2.appspot.com",
  messagingSenderId: "643518485815",
  appId: "1:643518485815:web:6fe796e65868c87aa4b6b2",
  measurementId: "G-7EB6K83DQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
