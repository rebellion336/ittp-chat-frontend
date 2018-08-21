import { combineReducers } from 'redux'
import loginReducer from './login'
import chatReducer from './chat'

export const rootReducer = combineReducers({
    login : loginReducer,
    chat : chatReducer
})