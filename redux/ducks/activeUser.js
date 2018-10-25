export const FETCH_ACTIVE_USER = 'ittp-chat/activeUser/FETCH_ACTIVE_USER'
const FETCH_ACTIVE_USER_SUCCESS =
  'ittp-chat/activeUser/FETCH_ACTIVE_USER_SUCCESS'
const FETCH_ACTIVE_USER_FAILURE =
  'ittp-chat/activeUser/FETCH_ACTIVE_USER_FAILURE'

export const fetchActiveUser = () => {
  return {
    type: FETCH_ACTIVE_USER,
    payload: {},
  }
}

export const fetchActiveUserSuccess = ({ data }) => {
  return {
    type: FETCH_ACTIVE_USER_SUCCESS,
    payload: { data },
  }
}

export const fetchActiveUserFailure = () => ({
  type: FETCH_ACTIVE_USER_FAILURE,
  payload: { code, message },
})

const initialState = {
  error: {},
  loading: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ACTIVE_USER: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_ACTIVE_USER_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        loading: false,
        data: data,
      }
    }
    case FETCH_ACTIVE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      }
    }
    default:
      return state
  }
}
export default reducer
