import { SET_CURRENT_USER, 
  REQUEST_NEW_USER,
  NEW_USER_FAIL,
  REQUEST_USER_LOGIN,
  USER_LOGIN_FAIL } from '../actions/auth';

const initialAuthState = {
  isLoading: false,
  isLoggedIn: false,
  user: '',
  errorMessage: ''
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.user
      }
    case REQUEST_NEW_USER:
      return {
        ...state,
        isLoading: true
      }
    case NEW_USER_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    case REQUEST_USER_LOGIN:
      return {
        ...state,
        isLoading: true
      } 
    case USER_LOGIN_FAIL:
      return{
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}