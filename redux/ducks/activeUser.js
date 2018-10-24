export const SET_ACTIVE_USER = 'ittp-chat/activeUser/SET_ACTIVE_USER'
const SET_ACTIVE_USER_SUCCESS = 'ittp-chat/activeUser/SET_ACTIVE_USER_SUCCESS'
const SET_ACTIVE_USER_FAILURE = 'ittp-chat/activeUser/SET_ACTIVE_USER_FAILURE'

export const setActiveUser = ({ id }) => {
  return {
    type: SET_ACTIVE_USER,
    payload: { id },
  }
}

export const setActiveUserSuccess = ({ id }) => {
  return {
    type: SET_ACTIVE_USER_SUCCESS,
    payload: { id },
  }
}

export const setActiveUserFailure = () => ({
  type: SET_ACTIVE_USER_FAILURE,
  payload: { code, message },
})

const initialState = {
  error: {},
  loading: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_ACTIVE_USER_SUCCESS: {
      const { id } = action.payload
      return {
        ...state,
        loading: false,
        id: id,
      }
    }
    case SET_ACTIVE_USER_FAILURE: {
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
