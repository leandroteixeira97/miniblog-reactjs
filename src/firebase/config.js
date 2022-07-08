import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUJhi5yjKSAJnwUVA-HbkajDF8ZDMQqoU",
  authDomain: "miniblog-3de7c.firebaseapp.com",
  projectId: "miniblog-3de7c",
  storageBucket: "miniblog-3de7c.appspot.com",
  messagingSenderId: "788077971735",
  appId: "1:788077971735:web:9c4ee873c5dca4e53ccf52"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 