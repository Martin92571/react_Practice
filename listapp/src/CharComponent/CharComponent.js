import React from 'react';

const CharComp=(props)=>{
    
    let ifValid=props.char;
    const style={
        display:'inline-block',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black'
    }
    
 return(
     <div data-type={props.position} style={style} onClick={(e)=>props.click(e)}> 
          {ifValid}
     </div>
     
     
     
 )
}

export default  CharComp;