import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProgressScreen from './components/ProgressScreen';
import ProfileScreen from './components/ProfileScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/progress" component={ProgressScreen} />
        <Route path="/profile" component={ProfileScreen} />
      </Switch>
    </Router>
  );
}

export default App;
