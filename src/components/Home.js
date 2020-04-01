import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import BasicButton from './formComponents/BasicButton';
import { logoutUser } from '../actions/auth';

const Home = (props) => {

  const handleLogout = (event) => {
    event.preventDefault();
    props.logoutUser()
  }

  if (props.currentUser.isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, {props.currentUser.user.email}!</h1>
        <Dashboard />
        <BasicButton type="button" handleClick={handleLogout} value="Logout" />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Please login.</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(Home);