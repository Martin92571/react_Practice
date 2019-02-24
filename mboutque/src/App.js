import React, { Component } from 'react';
import Header from './Header';
import Home from './MainPage';
import OurMacarones from './OurMacarones';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Route exact path="/" component={Home}/>
       <Route path="/our-macaones" component={OurMacarones}/>
       <Footer/>
      </div>
    );
  }
}

export default App;
