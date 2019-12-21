import firebaseConfig from './firebaseConfig'
import firebase from 'firebase/app'
//USING FIREBASE ADMIN SDK
//import admin from 'firebase-admin'
//import serviceAccount from './Service_Accountkey'

import 'firebase/firestore'
import 'firebase/auth'

// INITIALIZING FIREBASE APP
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export const db = firebase.firestore()
export const auth = firebase.auth()

export default firebase.firestore()