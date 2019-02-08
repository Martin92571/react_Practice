import React from 'react';
import './UserOutput.css'
const UserOutput=(props)=>{
     const style={
         color:'red',
         fontSize:'26px'
     };
     return(
      <p className="small"><span style={style}>{props.name}</span> Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.

      The instructions are:
      
      Create TWO new components: UserInput and UserOutput
      UserInput should hold an input element, UserOutput two paragraphs
      Output multiple UserOutput components in the App component (any paragraph texts of your choice)
      </p>
     
     );
}

export default UserOutput;  