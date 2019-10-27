import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Characters from './pages/Characters';
import Campaign from './pages/Campaign';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/Campaign'>
            <Campaign />
          </Route>
          <Route path='/characters'>
            <Characters />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
