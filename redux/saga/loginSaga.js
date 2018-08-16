import {takeLatsest,all,call,put} from 'redux-saga/effexts'
import {
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE
} from '../duck/login'
import axios from 'axios'

export function* CallLoginAPI(){
  try{
    const response = yield call(LoginAIP)
    //dispatch a sucess action to the store
    yield put({type: API_LOGIN_SUCCESS}
  } catch(error){
    
  }
}

export function* loginSaga(){
  yield all([
    takeLatsest(API_LOGIN_REQUEST,CallLoginAIP )
  ])
}