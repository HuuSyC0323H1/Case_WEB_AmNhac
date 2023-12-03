// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL2R9sJ8Y_Zuq9CpKI-46paRbV1UybI1U",
    authDomain: "case-amnhac.firebaseapp.com",
    projectId: "case-amnhac",
    storageBucket: "case-amnhac.appspot.com",
    messagingSenderId: "492280220497",
    appId: "1:492280220497:web:77884c69a4df283d326170",
    measurementId: "G-ZGPRN112YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);