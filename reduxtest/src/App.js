import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Clock from './clock';
class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 className="text-center">Redux Clock!</h1>
      <Clock/>
     </div>
    );
  }
}

export default App;
