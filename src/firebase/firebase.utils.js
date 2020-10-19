import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD9boiLwoluf5KVsVoXnHOEXd66J2N6420",
    authDomain: "e-commerce-website-654b8.firebaseapp.com",
    databaseURL: "https://e-commerce-website-654b8.firebaseio.com",
    projectId: "e-commerce-website-654b8",
    storageBucket: "e-commerce-website-654b8.appspot.com",
    messagingSenderId: "542698267181",
    appId: "1:542698267181:web:bbc10ff40317e0cbf70ea4",
    measurementId: "G-P5XEVZWE7Z"
}

firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



