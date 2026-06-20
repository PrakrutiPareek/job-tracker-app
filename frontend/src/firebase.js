import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTJPz4ChhLuEnbf0RnoZ3aXImJ_fnjdA0",
  authDomain: "jobease-979d9.firebaseapp.com",
  projectId: "jobease-979d9",
  appId: "1:57409627591:web:b66d568338ca59d7d1e5e2",};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);