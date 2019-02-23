import React, { Component } from 'react';
import Header from './Header';
import Home from './MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Home/>
      </div>
    );
  }
}

export default App;
