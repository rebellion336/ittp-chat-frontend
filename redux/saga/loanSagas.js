import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  FETCH_LOAN,
  fetchLoanSuccess,
  fetchLoanFailure,
  BIND_ID,
  bindId,
  bindIdSuccess,
  bindIdFailure,
} from '../ducks/loan'
import { API_SERVER, getJSON } from '../../tools/api'

export function* fetchLoanSaga(action) {
  const { id } = action.payload
  //use api to fetch data from apiV2
  try {
    const data = yield call(getJSON, `${API_SERVER}/chats/${id}`)
    // const data = yield call(getJSON, `http://45.77.47.114:7778/chats/${id}`)
    yield put(fetchLoanSuccess({ data }))
  } catch (error) {
    console.log('fecthLoanError')
    const { code, message } = error
    yield put(fetchLoanFailure({ code, message }))
  }
}

// ยังเขียนไม่เสร์จ
// export function* bindIdSaga(action){
//     const {id , citizenId , platform} = action.payload
//     //use api to bind LINE/FACEBOOK ID with customerCitizenId
//     try{
//         const value = {
//             id: id,
//             citizenId : citizenId,
//             platform: platform
//         }
//         postJSON(
//             `${API_SERVER}/chats/line/binding`,
//             value
//         )
//         yield put(bindIdSuccess({data}))
//     }
//     catch(error){
//         console.error(error)
//     }
// }

export function* loanSagas() {
  yield all([
    takeLatest(FETCH_LOAN, fetchLoanSaga),
    // takeLatest(BIND_ID, bindIdSaga)
  ])
}
