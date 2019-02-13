import React, { useState } from 'react';
import stuff from '../Cockpit/Cockpit.module.css';

const cockpit=(props)=>{
  // useEffect(()=>{
  //       console.log('[Cockpit.js] useEffect');
  // });
  console.log(useState(4));
  
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
    const classes=[];
    if(props.showPerson){
    style.backgroundColor='red';
    style[':hover']={
      backgroundColor:'blue',
      color:'black'
    }
}
    if(props.persons.length<=2){
      classes.push(stuff.red);
    }
    if(props.persons.length<=1){
      classes.push(stuff.bold);
    }
    return(
        <div>
        <h1 className={classes.join(' ')} >Hi I'm react App</h1>
        <button  style={style} onClick={props.toggle}>Toogle</button>
        </div>
    )
}

export default cockpit;