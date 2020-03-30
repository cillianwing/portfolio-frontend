import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/auth';

const Registration = (props) => {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNewUser(registerForm);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...registerForm,
      [name]: value
    }
    setRegisterForm(updatedFormInfo)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={registerForm.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={registerForm.password} onChange={handleInputChange} required />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={registerForm.password_confirmation} onChange={handleInputChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default connect(null, { createNewUser })(Registration);