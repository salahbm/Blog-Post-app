import {initializeApp} from 'firebase/app';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAm6Y2jNQN_vKoMiBGIDuB66OoKwpE8CzU',
  authDomain: 'typescriptapp-b642e.firebaseapp.com',
  projectId: 'typescriptapp-b642e',
  storageBucket: 'typescriptapp-b642e.appspot.com',
  messagingSenderId: '198660967053',
  appId: '1:198660967053:web:4a5ba5a9af5400f895b0c4',
  measurementId: 'G-5RWSSVHKNX',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
