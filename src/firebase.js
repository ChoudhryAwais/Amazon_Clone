import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBNzAvX7WzrVV66kzglhuvqBUOkfhzIGRA",
    authDomain: "clone-by-awais.firebaseapp.com",
    databaseURL: "https://clone-by-awais.firebaseio.com",
    projectId: "clone-by-awais",
    storageBucket: "clone-by-awais.appspot.com",
    messagingSenderId: "1014184770821",
    appId: "1:1014184770821:web:ddffba2b161111984fcb6c",
    measurementId: "G-NY9XVMG5RZ",
})

const auth = firebase.auth();

export {auth};