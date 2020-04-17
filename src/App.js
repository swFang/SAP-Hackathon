import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import GoogleApiWrapper from './components/Googlemap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <GoogleApiWrapper />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
