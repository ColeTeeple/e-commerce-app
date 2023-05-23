// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyANaBiqYm5v33dIyaupIzynal06q_T8M3I",
//   authDomain: "shopping-cart-app-41c94.firebaseapp.com",
//   projectId: "shopping-cart-app-41c94",
//   storageBucket: "shopping-cart-app-41c94.appspot.com",
//   messagingSenderId: "1022773140083",
//   appId: "1:1022773140083:web:3ec914c48f781b2e85a806"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;