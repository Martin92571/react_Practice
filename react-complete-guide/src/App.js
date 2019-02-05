import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name:'martin',age:26},
      {name:'max',age:24},
      {name:'marvin',age:56}
    ]
  }
  switchNameHandler=(newName)=>{
    console.log('was Clicked');
    this.setState({
      persons:[
        {name:newName,age:2},
        {name:'max',age:24},
        {name:'marvin',age:56}
      ]
    })
  }
  nameChangedHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:2},
        {name:'max',age:24},
        {name:'marvin',age:56}
      ]
  
    })
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'25px',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App person">
       <h1>Hi I'm react App</h1>
        <button className="oh" style={style} onClick={()=>this.switchNameHandler('Panchita')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this,'tacoBell')}
       changed={this.nameChangedHandler}
       >Hobbies include Walks on the Beach</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies include Walks on the Beach</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies include Walks on the Beach</Person>
      </div>
    );
  }
}

export default App;
