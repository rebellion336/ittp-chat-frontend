import {takeLatest,all,call,put} from 'redux-saga/effects'
import {
    FETCH_CHAT,
    SEND_MESSAGE,
    fetchChat,
    fetchChatSuccess,
    fetchChatFailure,
    sendMessage,
    sendMessageSuccess,
    sendMessageFailure
} from '../ducks/chat'
import {
    API_SERVER,
    getJSON,
    patchJSON,
    postJSON,
    deleteJSON
  } from '../../tools/api'

export function* fetchChatSaga(action){
    try {
        console.log('try')
    }
    catch (error){
        console.error('catch'.error)
    }
}
export function* chatSagas() {
    yield all([
        takeLatest(FETCH_CHAT, fetchChatSaga),
    ])
  }
