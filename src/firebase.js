import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlSL5WsweJUs3mn2sFoxal8z-11E5DTsY",
    authDomain: "tesla-2-0.firebaseapp.com",
    projectId: "tesla-2-0",
    storageBucket: "tesla-2-0.appspot.com",
    messagingSenderId: "918765280713",
    appId: "1:918765280713:web:00cf142b9a257b299d1c18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export {auth}