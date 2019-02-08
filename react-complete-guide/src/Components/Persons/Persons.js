import React from 'react';
import Person from './Person/Person';
const People=(props)=>props.persons.map((person,key)=>{
    return(
       
       <Person key={person.id} name={person.name} age={person.age} 
       changed={(event)=>props.change(event,person.id)} 
       click={()=>props.clicked(key)}
          ></Person>
          
           )
   })
   export default People;
