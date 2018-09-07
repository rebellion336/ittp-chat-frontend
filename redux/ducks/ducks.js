import { combineReducers } from 'redux'
import authReducer from './auth'
import cookieReducer from './cookie'
import chatReducer from './chat'
import loanReducer from './loan'

export const rootReducer = combineReducers({
    auth : authReducer,
    cookie: cookieReducer,
    chat : chatReducer,
    loan : loanReducer
})

export const defaultState = {}