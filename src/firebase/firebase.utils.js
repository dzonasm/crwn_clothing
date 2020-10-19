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
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef
}

firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



