import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAsIA4GmfvboLQvgGBJi49Pn1g31kHajWY',
  authDomain: 'jobi-98e30.firebaseapp.com',
  projectId: 'jobi-98e30',
  storageBucket: 'jobi-98e30.appspot.com',
  messagingSenderId: '212100124734',
  appId: '1:212100124734:web:8cfe3da22f94a86ca2816f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
