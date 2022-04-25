import { async } from '@firebase/util';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseConfig';

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default{
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        console.log(result); //Remover após testes
        return result;
    }
}