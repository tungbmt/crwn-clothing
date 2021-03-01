import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase'
import { fetchCollectionsFail, fetchCollectionsSuccess } from './shop.actions'
import shopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFail(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
