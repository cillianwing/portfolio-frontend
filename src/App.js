import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import { checkLoginStatus } from './actions/auth';

function App(props) {

  useEffect(() => {
    if (!props.currentUser.isLoggedIn) {
      props.checkLoginStatus()
    }
  })

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  }
}

export default connect(mapStateToProps, { checkLoginStatus })(App);
