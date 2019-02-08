import React from 'react';
const UserInput=(props)=>{
 
     return(
      <input onChange={props.change} value={props.name} type="text"/>
     
     );
}

export default UserInput;  