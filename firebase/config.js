import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBC9TG-q-Ogq0e-inH3-RLx-gpwFsqGuaM',
  authDomain: 'mobileapp-5f974.firebaseapp.com',
  projectId: 'mobileapp-5f974',
  storageBucket: 'mobileapp-5f974.appspot.com',
  messagingSenderId: '340946017657',
  appId: '1:340946017657:web:2e392d9d103b86a0b023a8',
  measurementId: 'G-SDB5EEYX5Z',
};

const app = initializeApp(firebaseConfig);
console.log(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
