import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase'
import { signInSuccess, signInFail } from './user.actions'
import UserActionTypes from './user.types'

export function* getSnapShotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapShot = yield userRef.get()

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch (error) {
    yield put(signInFail(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    yield put(signInFail(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    put(signInFail(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
