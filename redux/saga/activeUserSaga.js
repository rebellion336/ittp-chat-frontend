import { takeLatest, all, put } from 'redux-saga/effects'
import {
  SET_ACTIVE_USER,
  setActiveUserSuccess,
  setActiveUserFailure,
} from '../ducks/activeUser'

export function* setActiveUserSagas(action) {
  const { id } = action.payload
  try {
    yield put(setActiveUserSuccess({ id }))
  } catch (error) {
    console.log('error setActiveUserSagas>>>>', error)
    const { code, message } = error
    yield put(setActiveUserFailure({ code, message }))
  }
}

export function* activeUserSagas() {
  yield all([takeLatest(SET_ACTIVE_USER, setActiveUserSagas)])
}
