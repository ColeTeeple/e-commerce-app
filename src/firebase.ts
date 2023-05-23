// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyANaBiqYm5v33dIyaupIzynal06q_T8M3I",
  authDomain: "shopping-cart-app-41c94.firebaseapp.com",
  projectId: "shopping-cart-app-41c94",
  storageBucket: "shopping-cart-app-41c94.appspot.com",
  messagingSenderId: "1022773140083",
  appId: "1:1022773140083:web:3ec914c48f781b2e85a806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;