import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Results from './Results.js';
import Home from './Home.js';
import Question_Page from './Questions/Question_single_test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classname = "App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/question">
              <Question_Page />
            </Route>
            <Route path="/result">
              <Results />
            </Route>
          </Switch>
        <div className = "Credits">Credits: ZotHacks 2021 Team 11</div>
      </div>
    );
  }
}


export default App;