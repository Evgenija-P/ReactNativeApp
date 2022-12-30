import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBC9TG-q-Ogq0e-inH3-RLx-gpwFsqGuaM',
  authDomain: 'mobileapp-5f974.firebaseapp.com',
  projectId: 'mobileapp-5f974',
  storageBucket: 'mobileapp-5f974.appspot.com',
  messagingSenderId: '340946017657',
  appId: '1:340946017657:web:2e392d9d103b86a0b023a8',
  measurementId: 'G-SDB5EEYX5Z',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
