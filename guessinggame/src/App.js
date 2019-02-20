import React, { Component } from 'react';
import InputDiv from './InputDiv';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Guess from './Guess';
class App extends Component {
  state={
    guess:Math.floor((Math.random() * 10000) + 1),
    inputNumber:'',
    guesses:[],
    correct:false

  }
  inputValue=(event)=>{
    console.log(event);
  this.setState({
      inputNumber:event.target.value
  })
  }
  checkGuess=(event)=>{
    if(this.state.inputNumber===''){
      return;
    }
    let currentGuess=[...this.state.guesses];
    console.log(currentGuess);
   if(this.state.guess===this.state.inputNumber){
     currentGuess.push(this.state.inputNumber);

     this.setState({
        correct:true,
        guesses:currentGuess,
        inputNumber:''
     })
   }else{
    currentGuess.push(this.state.inputNumber);
    this.setState({
      guesses:currentGuess,
      inputNumber:''
    })
   }
  }
  deleteGuesses=(event)=>{
    this.setState({
      guesses:[],
      inputNumber:'',
      guess:Math.floor((Math.random() * 10000) + 1)
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Guess The Number Between 1 - 10,000</h1>
       <InputDiv delete={this.deleteGuesses} check={this.checkGuess} change={this.inputValue} number={this.state.inputNumber}/>
       <Guess rNumber={this.state.guess} amount={this.state.guesses}/>
      </div>
    );
  }
}

export default App;
