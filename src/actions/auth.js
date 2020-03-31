import axios from 'axios';

export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const REQUEST_NEW_USER = "REQUEST_NEW_USER"
export const NEW_USER_FAIL = "NEW_USER_FAIL"
export const REQUEST_USER_LOGIN = "REQUEST_USER_LOGIN"
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export const requestNewUser = () => {
  return {
    type: REQUEST_NEW_USER,
  }
}

export const newUserFail = (errorMessage) => {
  return {
    type: NEW_USER_FAIL,
    errorMessage
  }
}

export const requestUserLogin = () => {
  return {
    type: REQUEST_USER_LOGIN
  }
}

export const userLoginFail = (errorMessage) => {
  return {
    type: USER_LOGIN_FAIL,
    errorMessage
  }
}

export const createNewUser = (credentials) => {
  return (dispatch) => {
    dispatch(requestNewUser())
    return axios.post('http://localhost:3001/registrations', {
      user: credentials
    },
    { withCredentials: true }
    )
    .then(res => {
      if (res.data.status === 'created') {
        console.log(res.data.user)
        dispatch(setCurrentUser(res.data.user))
      } else {
        dispatch(newUserFail(res.data.message))
      }
    }).catch(err => console.log("Error: ", err))
  }
}

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(requestUserLogin())
    return axios.post('http://localhost:3001/sessions', {
      user: credentials
    },
    { withCredentials: true }
    )
    .then(res => {
      if (res.data.logged_in) {
        console.log(res.data.user)
        dispatch(setCurrentUser(res.data.user))
      } else {
        dispatch(userLoginFail("Failed to login."))
      }
    }).catch(err => console.log("Error: ", err))
  }
}