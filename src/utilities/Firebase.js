// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMNpJdJlInmiJgL7uwfG7LRERL9l_1T_0",
    authDomain: "learning-hub-v1.firebaseapp.com",
    projectId: "learning-hub-v1",
    storageBucket: "learning-hub-v1.appspot.com",
    messagingSenderId: "516969056995",
    appId: "1:516969056995:web:33b36a89fa63926381d3d6",
    measurementId: "G-SYMES05KF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, auth };