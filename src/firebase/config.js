// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXOc1_eBVJAfItJXpVKGfJZUDwqq9hh8",
  authDomain: "informaticamoderna-59897.firebaseapp.com",
  projectId: "informaticamoderna-59897",
  storageBucket: "informaticamoderna-59897.appspot.com",
  messagingSenderId: "1016659063418",
  appId: "1:1016659063418:web:82fd7a35bd8921dc2c41c3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}