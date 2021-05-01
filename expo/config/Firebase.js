import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';  
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC4irp0PyukFXF979TsuTwjo7UDiYSMiQE',
    authDomain: 'intrusion-65731.firebaseapp.com',
    databaseURL: 'https://intrusion-65731-default-rtdb.firebaseio.com',
    projectId: 'intrusion-65731',
    storageBucket: 'intrusion-65731.appspot.com',
    messagingSenderId: '831068709595',
    appId: '1:831068709595:web:d59ff4bd9568722a91e2fe'
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase