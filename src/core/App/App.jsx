import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../components/Home/Home';
import Profile from '../../components/Profile/Profile';

import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    </Switch>
  </Router>
);

export default App;
