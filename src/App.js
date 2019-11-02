import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/common/NavBar'
import Home from './pages/Home';
import Characters from './pages/Characters';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/Characters' component={Characters} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
