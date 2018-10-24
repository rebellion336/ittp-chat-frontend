import { all } from 'redux-saga/effects'
import { authSagas } from './authSagas'
import { chatSagas } from './chatSaga'
import { loanSagas } from './loanSagas'
import { activeUserSagas } from './activeUserSaga'

export function* rootSaga() {
  yield all([authSagas(), chatSagas(), loanSagas(), activeUserSagas()])
}
