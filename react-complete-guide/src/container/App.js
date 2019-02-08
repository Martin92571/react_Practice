import React, { Component } from 'react';
import appclass from './App.module.css';
import Person from '../Components/Persons/Person/Person';
import ErroB from '../Components/ErrorB/ErrorB';

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
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:person })
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
    const style={
      backgroundColor:'white',
      font:'25px',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };
    let persons=null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((person,key)=>{
           return <ErroB key={person.id}><Person  name={person.name} age={person.age} changed={(event)=>this.nameChangedHandler(event,person.id)} click={()=>this.deletePersonHandler(key)}
         ></Person></ErroB>;
          })}
        
      </div>        
      );
     style.backgroundColor='red';
     style[':hover']={
       backgroundColor:'blue',
       color:'black'
     }
    }
    const classes=[];
    if(this.state.persons.length<=2){
      classes.push(appclass.red);
    }
    if(this.state.persons.length<=1){
      classes.push(appclass.bold);
    }
    return (

      <div className={appclass.App}>
       <h1 className={classes.join(' ')} >Hi I'm react App</h1>
        <button  style={style} onClick={this.togglePersonHandler}>Toogle</button>
        
        {persons}
      
      </div>
   
    );
  }
}

export default App;
