import { takeLatest, all, call, put } from 'redux-saga/effects'
import { LOGIN, loginSuccess, loginFailure, LOGOUT } from '../ducks/auth'
import { setCookie, removeCookie } from '../ducks/cookie'
import { API_SERVER, postJSON } from '../../tools/api'
import { redirect } from '../../tools/utils'

export function* loginSaga(action) {
  try {
    console.log('apisaga:>>>>>',API_SERVER)
    const { token, email, permissions, id } = yield call(
      postJSON,
      `${API_SERVER}/users/login`,
      action.payload
    )
    // Save auth info to cookies
    yield put(setCookie({ key: 'token', value: token }))
    yield put(setCookie({ key: 'email', value: email }))
    yield put(
      setCookie({ key: 'permissions', value: JSON.stringify(permissions) })
    )
    yield put(setCookie({ key: 'id', value: id }))
    // Keep auth info in store
    yield put(loginSuccess({ token, email, permissions, id }))
    redirect('/chat')
  } catch (error) {
    const { code, message } = error
    yield put(loginFailure({ code, message }))
  }
}
export function* logoutSaga() {
  yield put(removeCookie({ key: 'token' }))
  yield put(removeCookie({ key: 'email' }))
  yield put(removeCookie({ key: 'permissions' }))
  yield put(removeCookie({ key: 'id' }))
  redirect('/login')
}
export function* authSagas() {
  yield all([takeLatest(LOGIN, loginSaga), takeLatest(LOGOUT, logoutSaga)])
}
