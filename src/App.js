import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/auth/Registration';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/registration' component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
