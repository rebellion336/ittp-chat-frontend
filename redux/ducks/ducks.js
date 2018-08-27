import { combineReducers } from 'redux'
import authReducer from './auth'
import cookieReducer from './cookie'
import chatReducer from './chat'

export const rootReducer = combineReducers({
    auth : authReducer,
    cookie: cookieReducer,
    chat : chatReducer
})

export const defaultState = {}