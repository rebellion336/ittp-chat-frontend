const API_LOGIN_REQUEST = "API_LOGIN_REQUEST"
const API_LOGIN_SUCCESS = "API_LOGIN_SUCCESS"
const API_LOGIN_FAILURE = "API_LOGIN_FAILURE"

const initialState = {
  error: {},
  loading: false
}

export function reducer( state = initialState , action){
  switch(action.type){
    case API_LOGIN_REQUEST:
      return {...state, loading:true, error:false}
    case API_LOGIN_SUCCESS:
      return {...state, loading:false}
    case API_LOGIN_FAILURE:
      return {...state, loading:false}
    default:
      return state
  }
}