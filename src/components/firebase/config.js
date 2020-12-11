import firebase from "firebase";
//npm install firebase

const firebaseConfig = {    
    apiKey: "AIzaSyCspdjHUYzyh2bVDhtPZEAp1q1HfT_kZLk",
    authDomain: "pokedex-6203d.firebaseapp.com",
    databaseURL: "https://pokedex-6203d.firebaseio.com",
    projectId: "pokedex-6203d",
    storageBucket: "pokedex-6203d.appspot.com",
    messagingSenderId: "279679471740",
    appId: "1:279679471740:web:ce71aba7bc1de2773bf9f9"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;