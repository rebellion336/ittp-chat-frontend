import {takeLatest,all,call,put} from 'redux-saga/effects'
import {
    FETCH_CHAT,
    SEND_MESSAGE,
    fetchChat,
    fetchChatSuccess,
    fetchChatFailure,
    sendMessageSuccess,
    sendMessageFailure
} from '../ducks/chat'
import {
    API_SERVER,
    getJSON,
    postJSON,
  } from '../../tools/api'
import { json2qs } from '../../tools/utils'

export function* fetchChatSaga(action){
    try {
        const data = yield call(
            getJSON,
            `${API_SERVER}/chats`
        )
        yield put(fetchChatSuccess({ data }))
    }
    catch (error){
        const { code, message } = error
        yield put(fetchChatFailure({ code, message }))
    }
}
export function* sendMessageSaga(action){
    try {
        const {id, platform, message} = action.payload
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log('FROMSAGA')
        console.log('id',id)
        console.log('platform',platform)
        console.log('message',message)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        const value = {
            id : id,
            platform : platform,
            message : message
        }
        const data = yield call(
            postJSON,
            `${API_SERVER}/chats/sendmessage`,
            value
        )
        yield put(sendMessageSuccess({ data }))
        yield put(fetchChatfetchChat({
            id : id,
            platform: platform
        }))
    }
    catch (error){
        const { code, message } = error
        yield put(sendMessageFailure({ code, message }))
    }
}
export function* chatSagas() {
    yield all([
        takeLatest(FETCH_CHAT, fetchChatSaga),
        takeLatest(SEND_MESSAGE,sendMessageSaga)
    ])
  }
