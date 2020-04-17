import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Questionnaire from './components/Questionnaire';
import GoogleApiWrapper from './components/Googlemap';
import QuestionnaireRecommendation from './components/QuestionnaireRecommendation';

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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/questionnaire">
              <Questionnaire />
            </Route>
            <Route path="/end">
              <QuestionnaireRecommendation/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
