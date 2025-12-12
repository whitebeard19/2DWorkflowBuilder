// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.PARCEL_FIREBASE_API_KEY,
  authDomain: process.env.PARCEL_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PARCEL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PARCEL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PARCEL_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PARCEL_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;