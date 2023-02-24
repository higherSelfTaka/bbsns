// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  
  };


  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth =getAuth();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage, auth };