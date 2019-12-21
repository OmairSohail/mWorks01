import firebaseConfig from './firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// INITIALIZING FIREBASE APP
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export const db = firebase.firestore()
export const auth =firebase.auth()

export default firebase.firestore()