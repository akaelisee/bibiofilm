import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBUpBQICmEUgr6AMoBUV62wL2tPZautfQ",
  authDomain: "bibliofilm-7b479.firebaseapp.com",
  projectId: "bibliofilm-7b479",
  storageBucket: "bibliofilm-7b479.appspot.com",
  messagingSenderId: "582412666899",
  appId: "1:582412666899:web:aa8b078a699e6cc3bc97e6",
  measurementId: "G-CKBYPQ50VL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);