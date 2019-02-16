import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Welcome from './components/welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route path="/" component={Welcome}/>
      </div>
    );
  }
}

export default App;
