import React, { Component } from 'react';
import InputMe from './InputListener/Inputlistener'
import CharComp from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
  state={
    text:''
   }
   changeTheState=(event)=>{
    this.setState({
      text:event.target.value
    })
   }
   deleteString=(event)=>{
   let newString=this.state.text.split("");
   newString.splice(event.target.dataset.type,1);
   newString=newString.join('');  
   this.setState({text:newString })
   
   }
  render() {
    let list=this.state.text.split("");
    let inital=0;
    let person=list.map((x,key)=>{
      let position=inital;
      inital++
      return <CharComp position={position} click={this.deleteString} key={key} char={x}/>
    })
    return (
      <div className="App">
       
       <input value={this.state.text} id="thisThing"type="text" onChange={(e)=>{this.changeTheState(e);}}/>
       
      <h1>{this.state.text}</h1>
      <InputMe length={this.state.text}/>
      {person}
      </div>
    );
  }
}

export default App;
