import React, { Component } from 'react';
import appclass from './App.module.css';
import Person from '../Components/Persons/Persons';
import Cock from '../Components/Cockpit/Cockpit';

class App extends Component {
  state ={
    persons:[
      {id:"12315dc",name:'martin',age:26},
      {id:"fdsf15dcd",name:'max',age:24},
      {id:"dfds5dcdd",name:'marvin',age:56}
    ]
  }
  switchNameHandler=(newName)=>{
    console.log('was Clicked');
    this.setState({
      persons:[
        {name:newName,age:2},
        {name:'max',age:24},
        {name:'marvin',age:56}
      ],
      showPerson:false,
    })
  }
  nameChangedHandler=(event, id)=>{
    console.log(event.target.value);
    console.log(id);
    const personIndex=this.state.persons.findIndex(p=>{
      console.log(p);
      
      return p.id===id;
    });
    
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
     this.setState({persons:persons })
  }
  togglePersonHandler=()=>{
   const doesShow=this.state.showPerson;
   this.setState({
    showPerson:!doesShow
   })
  }
  deletePersonHandler=(person)=>{
    const persons=this.state.persons.slice();
    persons.splice(person,1);
    this.setState({persons});
  }
  render() {
   
    let persons=null;
    if(this.state.showPerson){
      persons=
        
          <Person 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          change={this.nameChangedHandler}
         ></Person>      
           
      
      
    }
    
    return (

      <div className={appclass.App}>
       
        <Cock showPerson={this.state.showPerson}toggle={this.togglePersonHandler} persons={this.state.persons}></Cock>
        {persons}
      
      </div>
   
    );
  }
}

export default App;
