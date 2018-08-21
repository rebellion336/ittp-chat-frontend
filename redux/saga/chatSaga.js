import {takeLatsest,all,call,put} from 'redux-saga/effexts'
import {
    FETCH_CHAT,
    SEND_MESSAGE,
    fetchChat,
    fetchChatSuccess,
    fetchChatFailure,
    sendMessage,
    sendMessageSuccess,
    sendMessageFailure
} from '../duck/chat'
import axios from 'axios'
import {
    API_SERVER,
    getJSON,
    patchJSON,
    postJSON,
    deleteJSON
  } from '../../tool/api'

export function* fetchChatSaga(action){
    try {
        
    }
    catch {

    }
}
