export const LOGIN = 'ittp-chat-frontend/auth/LOGIN'
const LOGIN_SUCCESS = 'ittp-chat-frontend/auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'ittp-chat-frontend/auth/LOGIN_FAILURE'
export const LOGOUT = 'ittp-chat-frontend/auth/LOGOUT'

export const login = ({ email, password }) => {
  return {
    type: LOGIN,
    payload: { email, password },
  }
}
export const loginSuccess = ({ token, email, permissions, id }) => ({
  type: LOGIN_SUCCESS,
  payload: { token, email, permissions, id },
})
export const loginFailure = ({ code, message }) => ({
  type: LOGIN_FAILURE,
  payload: { code, message },
})
export const logout = () => ({
  type: LOGOUT,
})

const initialState = {
  loading: false,
  error: {},
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
        error: {},
      }
    }
    case LOGIN_SUCCESS: {
      const { token, email, permissions, id } = action.payload
      return {
        error: {},
        loading: false,
        token,
        email,
        permissions,
        id,
      }
    }
    case LOGIN_FAILURE: {
      return {
        loading: false,
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      }
    }
    case LOGOUT: {
      return {
        loading: false,
        error: {},
      }
    }
    default:
      return state
  }
}
export default reducer
