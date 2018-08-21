import { all } from 'redux-saga/effects'
import { authSagas } from './authSagas'
import { chatSagas } from './chatSaga'

export function* rootSaga() {
    yield all([
        authSagas(),
        chatSagas()
    ])
}