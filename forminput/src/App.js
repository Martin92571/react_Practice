import React, { Component } from 'react';
import data from './data/contacts';
import ContactDiv from './ContactCard/ContactCard';
import Form from './Form/Form';
import './App.css';

class App extends Component {
  state={
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:''
  }
  changed=(event)=>{
    let typeOfState=event.target.dataset.type;
    const value=event.target.value;
    const stateObject={[typeOfState]:value};
    console.log(stateObject);
    this.setState(stateObject)
  }
  submit=(events)=>{
    const pushedObject={
      firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phoneNumber,
        email: this.state.email
    }
    data.push(pushedObject);
    this.setState({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:''
    })
  }
  clear=(event=>{
    this.setState({
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:''
      })
  })
  render() {
    
    const property=data.map((p,index)=>{
    return <ContactDiv key={index} firstname={p.firstName} lastname={p.lastName} phone={p.phone} Email={p.email}/>  
    })
    console.log(data);
    
    return (
      <div className="App">
        <Form clear={this.clear} submit={this.submit}changed={this.changed}first={this.state.firstName} last={this.state.lastName} phone={this.state.phoneNumber} email={this.state.email}/>
        {property}
      </div>
    );
  }
}

export default App;
