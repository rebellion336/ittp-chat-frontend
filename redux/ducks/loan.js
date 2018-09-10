export const FETCH_LOAN = 'ittp-chat/chat/FETCH_LOAN'
const FETCH_LOAN_SUCCESS = 'ittp-chat/chat/FETCH_LOAN_SUCCESS'
const FETCH_LOAN_FAILURE = 'ittp-chat/chat/FETCH_LOAN_FAILURE'

// export const BIND_ID = 'ittp-chat/chat/BIND_ID'
// const BIND_ID_SUCCESS = 'ittp-chat/chat/BIND_ID_SUCCESS'
// const BIND_ID_FAILURE = 'ittp-chat/chat/BIND_ID_FAILURE'

export const fetchLoan = ({id}) => {
    return{
        type: FETCH_LOAN,
        payload: {id}
    }
}

export const fetchLoanSuccess = ({ data }) => {
    return{
        type:FETCH_LOAN_SUCCESS,
        payload: {data}
    }
}

export const fetchLoanFailure = () => ({
    type:FETCH_LOAN_FAILURE,
    payload:{ code, message }
})

// export const bindId = ({ id , citizenId , platform }) => ({
//     type:BIND_ID,
//     payload:{id , citizenId , platform}
// })

// export const bindIdSuccess = ({ data }) => {
//     return{
//         type:BIND_ID_SUCCESS,
//         payload: {data}
//     }
// }

// export const bindIdFailure = ({ data }) => {
//     return{
//         type:BIND_ID_FAILURE,
//     payload:{ code, message }
//     }
// }

const initialState = {
    error: {},
    loading: false
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type){
        case FETCH_LOAN: {
            console.log('fetch loan reducer',action)
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_LOAN_SUCCESS: {
            const {data} = action.payload
            return {
                ...state,
                loading: false,
                data: data
            }
        }
        case FETCH_LOAN_FAILURE: {
            return {
                ...state,
                loading: false,
                error: {
                  code: action.payload.code,
                  message: action.payload.message
                }
            }
        }
        // case BIND_ID: {
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // }
        // case BIND_ID_SUCCESS: {
        //     const {data} = action.payload
        //     return {
        //         ...state,
        //         loading : false,
        //         data : data
        //     }
        // }
        // case BIND_ID_FAILURE: {
        //     return {
        //         ...state,
        //         loading: false,
        //         error: {
        //           code: action.payload.code,
        //           message: action.payload.message
        //         }
        //     }
        // }
        default:
            return state
    }
}
export default reducer