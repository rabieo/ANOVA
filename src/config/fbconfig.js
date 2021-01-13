
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDqnu8tiJGQqumFD1J8_t37TDsoXhByAEA",
    authDomain: "anova-c2e3d.firebaseapp.com",
    databaseURL: "https://anova-c2e3d.firebaseio.com",
    projectId: "anova-c2e3d",
    storageBucket: "anova-c2e3d.appspot.com",
    messagingSenderId: "253995907603",
    appId: "1:253995907603:web:31b7e6a6b568ab00ab1de6",
    measurementId: "G-4JZ7ZDB92L"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, firestore, firebase};