import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNlQ5wtvu6Q8eKKnTqZCuyD-9nJeTwWY8",
  authDomain: "diplom-tms-f4-94.firebaseapp.com",
  projectId: "diplom-tms-f4-94",
  storageBucket: "diplom-tms-f4-94.appspot.com",
  messagingSenderId: "537695810740",
  appId: "1:537695810740:web:94326a573549fd687c93e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);