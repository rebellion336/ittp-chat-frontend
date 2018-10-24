import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  FETCH_CHAT,
  SEND_MESSAGE,
  fetchChat,
  fetchChatSuccess,
  fetchChatFailure,
  sendMessageSuccess,
  sendMessageFailure,
} from '../ducks/chat'
import { API_SERVER, getJSON, postJSON } from '../../tools/api'

export function* fetchChatSaga(action) {
  const { id, platform } = action.payload
  if (platform === 'line') {
    // ไม่จำเป็นแล้ว ลบได้เลย
    // try {
    //   //const data = yield call(getJSON, `${API_SERVER}/chats/line/${id}`)
    //   const data = []
    //   //get data from firebase
    //   const dataRef = database.ref(`Message/${id}`)
    //   yield dataRef.once('value', snapshot => {
    //     snapshot.forEach(childSnapshot => {
    //       data.push({
    //         ...childSnapshot.val(),
    //       })
    //     })
    //   })
    //   yield put(fetchChatSuccess({ data }))
    // } catch (error) {
    //   const { code, message } = error
    //   yield put(fetchChatFailure({ code, message }))
    // }
  }
}
export function* sendMessageSaga(action) {
  try {
    const { id, platform, message } = action.payload
    const value = {
      id: id,
      platform: platform,
      message: message,
    }
    const data = yield call(postJSON, `${API_SERVER}/chats/sendmessage`, value)
    yield put(sendMessageSuccess({ data }))
    yield put(
      fetchChat({
        id: id,
        platform: platform,
      })
    )
  } catch (error) {
    const { code, message } = error
    yield put(sendMessageFailure({ code, message }))
  }
}
export function* chatSagas() {
  yield all([
    takeLatest(FETCH_CHAT, fetchChatSaga),
    takeLatest(SEND_MESSAGE, sendMessageSaga),
  ])
}
