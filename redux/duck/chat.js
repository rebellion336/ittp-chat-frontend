export const FETCH_CHAT = 'ittp-chat/chat/FETCH_CHAT'
const FETCH_CHAT_SUCCESS = 'ittp-chat/chat/FETCH_CHAT_SUCCESS'
const FETCH_CHAT_FAILURE = 'ittp-chat/chat/FETCH_CHAT_FAILURE'

export const fetchChat = ({id , platsform}) => {
    return{
        type: FETCH_CHAT,
        payload: {id , platsform}
    }
}

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
                id : action.payload.id,
                platsform: action.payload.platsform
            }
        }
    default:
        return state
    }
}
export default reducer