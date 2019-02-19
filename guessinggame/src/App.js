import React, { Component } from 'react';
import InputDiv from './InputDiv';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state={
    guess:Math.floor((Math.random() * 10000) + 1),
    inputNumber:''
  }
  inputValue=(event)=>{
    console.log(event);
  this.state({
      inputNumber:event.target.value
  })
  }
  render() {
    return (
      <div className="App">
       <h1>Guess The Number Between 1 - 10,000</h1>
       <InputDiv change={()=>this.state.inputValue} number={this.state.inputNumber}/>
      </div>
    );
  }
}

export default App;
