// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAa-SRMUYjd0_Oy1KLWN7_eL3JbqxtvcHw",
    authDomain: "newproject-9ca5e.firebaseapp.com",
    projectId: "newproject-9ca5e",
    storageBucket: "newproject-9ca5e.appspot.com",
    messagingSenderId: "85513095463",
    appId: "1:85513095463:web:cf3d3f31cab34610458102"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, db, storage};
