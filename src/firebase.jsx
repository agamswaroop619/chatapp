import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDsvskhGFbDO5HXK3lqG7iKHaVwrBLJXl4",
    authDomain: "chatapp-6851a.firebaseapp.com",
    projectId: "chatapp-6851a",
    storageBucket: "chatapp-6851a.appspot.com",
    messagingSenderId: "1008138350309",
    appId: "1:1008138350309:web:9e4dfcce3a685f5e706e0c",
    measurementId: "G-GLVKKJS8C2"
  });
  export const auth =firebase.auth();
  export const firestore=firebase.firestore();
  export const db =getFirestore(firebase.initializeApp);

 