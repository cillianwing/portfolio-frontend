import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (props.currentUser.isLoggedIn) {
      props.history.push('/')
    }
  }, [props.currentUser.isLoggedIn, props.history])

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(loginForm);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    setLoginForm(updatedFormInfo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={loginForm.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleInputChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, { loginUser })(Login);