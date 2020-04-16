import React from 'react';
import './App.css';
import Main from './components/main';
import Login from './components/login';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <p>This is the main</p>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
