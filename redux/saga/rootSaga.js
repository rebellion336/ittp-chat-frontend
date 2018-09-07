import { all } from 'redux-saga/effects'
import { authSagas } from './authSagas'
import { chatSagas } from './chatSaga'
import { loanSagas } from './loanSagas'

export function* rootSaga() {
    yield all([
        authSagas(),
        chatSagas(),
        loanSagas()
    ])
}