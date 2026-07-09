// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAisb4aW8N2WJfMjj5PBzFuqKWaItwrF1s",
  authDomain: "modulux-power.firebaseapp.com",
  projectId: "modulux-power",
  storageBucket: "modulux-power.firebasestorage.app",
  messagingSenderId: "520943238535",
  appId: "1:520943238535:web:b5ffd0fb5a789a1d3b2722",
  measurementId: "G-D12YGK620T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
