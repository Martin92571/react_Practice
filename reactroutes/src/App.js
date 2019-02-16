import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Welcome from './components/welcome';
import Nav from './components/nav';
import Macarone from './components/our_macarons';
import Gift from './components/gift_parties';
import ContactUs from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
       <Route exact path="/" component={Welcome}/>
       <Route path="/our_macarons" component={Macarone}/>
       <Route path="/gift_party" component={Gift}/>
       <Route path="/contact_us" component={ContactUs}/>
      </div>
    );
  }
}

export default App;
