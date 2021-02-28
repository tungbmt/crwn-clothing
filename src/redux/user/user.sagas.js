import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase'
import { googleSignInFail, googleSignInSuccess } from './user.actions'
import UserActionTypes from './user.types'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapShot = yield userRef.get()

    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    )
  } catch (error) {
    yield put(googleSignInFail(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
