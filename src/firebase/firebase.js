/* cSpell:disable */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAMGUyLuqjdoA8VSeT7RzJWLxT0-SMqQNI',
  authDomain: 'crwn-clothing-f0a34.firebaseapp.com',
  projectId: 'crwn-clothing-f0a34',
  storageBucket: 'crwn-clothing-f0a34.appspot.com',
  messagingSenderId: '746293419214',
  appId: '1:746293419214:web:6c87016be7f4587d2c049f',
  measurementId: 'G-ZKD6Q2WV1X',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase