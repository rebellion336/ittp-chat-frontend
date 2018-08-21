// types
export const SET_COOKIE = 'ittp-chat-frontend/cookie/SET_COOKIE'
const SET_COOKIE_SUCCESS = 'ittp-chat-frontend/cookie/SET_COOKIE_SUCCESS'
export const REMOVE_COOKIE = 'ittp-chat-frontend/cookie/REMOVE_COOKIE'
const REMOVE_COOKIE_SUCCESS = 'ittp-chat-frontend/cookie/REMOVE_COOKIE_SUCCESS'
const LOAD_ALL_COOKIES = 'ittp-chat-frontend/cookie/LOAD_ALL_COOKIES'

// actions
export const setCookie = ({ key, value }) => {
  return {
    type: SET_COOKIE,
    payload: {
      key,
      value,
    },
  }
}
export const setCookieSuccess = ({ key, value }) => {
  return {
    type: SET_COOKIE_SUCCESS,
    payload: {
      key,
      value,
    },
  }
}
export const removeCookie = ({ key }) => {
  return {
    type: REMOVE_COOKIE,
    payload: { key },
  }
}
export const removeCookieSuccess = ({ key }) => {
  return {
    type: REMOVE_COOKIE_SUCCESS,
    payload: { key },
  }
}
// cookies must be an object contain key/value of all cookies
export const loadAllCookies = cookies => {
  return {
    type: LOAD_ALL_COOKIES,
    payload: cookies,
  }
}

// reducer
const initialState = {}
const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE_SUCCESS: {
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value,
      }
    }
    case REMOVE_COOKIE_SUCCESS: {
      const newState = Object.assign({}, state)
      delete newState[action.payload.key]
      return newState
    }
    case LOAD_ALL_COOKIES: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
export default cookieReducer
