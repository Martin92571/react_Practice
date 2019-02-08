import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/Useroutput';
import './App.css';

class App extends Component {
  state={
    username:[
      {name:'Martin'},
       {name:'Tito'}
    ]
  }
 changeMyName=(event)=>{
   this.setState({
    username:[
      {name:event.target.value},
       {name:'Tito'}
    ]
   })
 }  
  
  render() {
    return (
      <div className="App">
       <h1>Input Some Stuff</h1>
        <UserInput name={this.state.username[0].name} change={this.changeMyName.bind()}/>
        <UserOutput name={this.state.username[0].name}/>
        <UserOutput name={this.state.username[1].name}/>
      </div>
    );
  }
}

export default App;
