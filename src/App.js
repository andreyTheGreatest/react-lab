import React from 'react';
import Login from './components/Login';
import WeatherList from './components/WeatherList';
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="body">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={WeatherList} />
        </div>
      </Router>
    );
  }
}

export default App;
