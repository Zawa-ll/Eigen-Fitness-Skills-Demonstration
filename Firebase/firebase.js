// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDgmASdmgqhSHE-7IXg7ffarE-nFN-CTM",
    authDomain: "skills-demonstration-backend.firebaseapp.com",
    projectId: "skills-demonstration-backend",
    storageBucket: "skills-demonstration-backend.appspot.com",
    messagingSenderId: "321888810243",
    appId: "1:321888810243:web:c00707a9b1f8a0ebe3a536",
    measurementId: "G-X9K5BXVG1Y"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };