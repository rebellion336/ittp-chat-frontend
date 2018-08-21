import { combineReducers } from 'redux'
import authReducer from './auth'
import chatReducer from './chat'

export const rootReducer = combineReducers({
    auth : authReducer,
    chat : chatReducer
})

export const defaultState = {}