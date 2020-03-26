import React, { useState } from 'react';

const Registration = (props) => {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.registerForm,
      [name]: value
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={} onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={} onChange={handleInputChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration;