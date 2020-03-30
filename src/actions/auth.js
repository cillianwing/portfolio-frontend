import axios from 'axios';

export const REQUEST_NEW_USER = "REQUEST_NEW_USER"
export const NEW_USER_FAIL = "NEW_USER_FAIL"
export const SET_CURRENT_USER = "SET_CURRENT_USER"

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

export const createNewUser = (credentials) => {
  return (dispatch) => {
    dispatch(requestNewUser())
    return axios.post('http://localhost:3001/registrations', {
      user: credentials
    },
    { withCredentials: true }
    )
    .then(res => res.data)
    .then(data => {
      console.log(data.status)
      console.log(data.user)
      // if (data.success) {
      //   dispatch(setCurrentUser(data.user))
      // } else {
      //   dispatch(newUserFail(data.failure))
      // }
    }).catch(err => console.log("Error: ", err))
  }
}