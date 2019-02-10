import React, { Component } from 'react';
import StopWatch from './StopWatch/StopWatch';
import './App.css';

class App extends Component {
 

  render() {
    return (
      <div className="container">
      <h1 className="text-center">Stopwatch</h1>
      <StopWatch/>
     </div>
    );
  }
}

export default App;
