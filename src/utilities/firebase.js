import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMNpJdJlInmiJgL7uwfG7LRERL9l_1T_0",
    authDomain: "learning-hub-v1.firebaseapp.com",
    projectId: "learning-hub-v1",
    storageBucket: "learning-hub-v1.appspot.com",
    messagingSenderId: "516969056995",
    appId: "1:516969056995:web:33b36a89fa63926381d3d6",
    measurementId: "G-SYMES05KF0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// Sample repo:
// https://github.com/Nitij/react-firebase-auth-boilerplate/tree/main