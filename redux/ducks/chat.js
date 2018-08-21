export const FETCH_CHAT = 'ittp-chat/chat/FETCH_CHAT'
const FETCH_CHAT_SUCCESS = 'ittp-chat/chat/FETCH_CHAT_SUCCESS'
const FETCH_CHAT_FAILURE = 'ittp-chat/chat/FETCH_CHAT_FAILURE'

export const SEND_MESSAGE = 'ittp-chat/chat/SEND_MESSAGE'
const SEND_MESSAGE_SUCCESS = 'ittp-chat/chat/SEND_MESSAGE_SUCCESS'
const SEND_MESSAGE_FAILURE = 'ittp-chat/chat/SEND_MESSAGE_FAILURE'

export const fetchChat = ({id , platsform}) => {
    return{
        type: FETCH_CHAT,
        payload: {id , platsform}
    }
}

export const fetchChatSuccess = () => ({
    type:FETCH_CHAT_SUCCESS,
    payload: {data}
})

export const fetchChatFailure = () => ({
    type:FETCH_CHAT_FAILURE,
    payload:{ code, message }
})

export const sendMessage = ({id, platsform, message}) => {
    return{
        type:SEND_MESSAGE,
        payload:{id, platsform, message}
    }
}

export const sendMessageSuccess = ({data}) => ({
    type:SEND_MESSAGE_SUCCESS,
    payload : {data}
})

export const sendMessageFailure = () => ({
    type: SEND_MESSAGE_FAILURE,
    payload: { code, message }
})

const initialState = {
    error: {},
    loading: false
}

const reducer = (state = initialState, action = {}) => {
    switch(action.tpye){
        case FETCH_CHAT: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_CHAT_SUCCESS:{
            const {data} = action.payload
            return {
                ...state,
                loading: false,
                data: data
            }
        }
        case FETCH_CHAT_FAILURE:{
            return {
                ...state,
                loading: false,
                error: {
                  code: action.payload.code,
                  message: action.payload.message
                }
              }
        }
        case SEND_MESSAGE:{
            return {
                ...state,
                loading:true,
            }
        }
        case SEND_MESSAGE_SUCCESS:{
            const {data} = action.payload
            return{
                ...state,
                loading:false,
                data: data
            }
        }
        case SEND_MESSAGE_FAILURE:{
            return {
                ...state,
                loading: false,
                error: {
                  code: action.payload.code,
                  message: action.payload.message
                }
              }
        }
    default:
        return state
    }
}
export default reducer