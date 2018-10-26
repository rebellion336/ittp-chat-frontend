import { takeLatest, all, put, take } from 'redux-saga/effects'
import {
  FETCH_ACTIVE_USER,
  fetchActiveUserSuccess,
  fetchActiveUserFailure,
} from '../ducks/activeUser'
import database from '../../firebase/firebase'

export function* fetchActiveUserSagas(action) {
  try {
    const data = []
    const activeUserRef = database.ref('ActiveUser')
    yield activeUserRef.once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        data.push(childSnapshot.val())
      })
    })

    yield put(fetchActiveUserSuccess({ data }))
  } catch (error) {
    console.log('error fetchActiveUserSagas>>>>', error)
    const { code, message } = error
    yield put(fetchActiveUserFailure({ code, message }))
  }
}

export function* activeUserSagas() {
  yield all([takeLatest(FETCH_ACTIVE_USER, fetchActiveUserSagas)])
}
