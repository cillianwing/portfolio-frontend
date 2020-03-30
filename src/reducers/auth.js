import { REQUEST_NEW_USER, NEW_USER_FAIL, SET_CURRENT_USER } from '../actions/auth';

const initialAuthState = {
  isLoading: false,
  user: '',
  errorMessage: ''
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
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
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        user: action.user
      }
    default:
      return state
  }
}