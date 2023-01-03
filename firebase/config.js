// import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAuPf0uovFfgNdvMpid8O3gs0PLrtKEtYU',
  authDomain: 'test-hw-88b1f.firebaseapp.com',
  projectId: 'test-hw-88b1f',
  storageBucket: 'test-hw-88b1f.appspot.com',
  messagingSenderId: '632076300276',
  appId: '1:632076300276:web:8d98a935f5279b45ced3a1',
  measurementId: 'G-P5ZLLMECTX',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// apiKey: 'AIzaSyAuPf0uovFfgNdvMpid8O3gs0PLrtKEtYU',
// authDomain: 'test-hw-88b1f.firebaseapp.com',
// projectId: 'test-hw-88b1f',
// storageBucket: 'test-hw-88b1f.appspot.com',
// messagingSenderId: '632076300276',
// appId: '1:632076300276:web:8d98a935f5279b45ced3a1',
// measurementId: 'G-P5ZLLMECTX',
