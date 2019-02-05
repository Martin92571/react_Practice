import React from 'react';
import './Person.css';
const person=(props)=>{
    console.log(props);
    return (
    <div className="person">
        <p onClick={props.click}>I'm {props.name} and i am {props.age} years old jk i am {Math.floor(Math.random()*30)} years old</p>
        <p >{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    
    );
}

export default person;