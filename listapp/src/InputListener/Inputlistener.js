import React from 'react';

const InputMe=(props)=>{
    let size=props.length;
    let ifValid='Text is Too Short';
    if(size.length>5){
      ifValid='Text is long enough';
    }
 return(
     <h1>
      {ifValid}
     </h1>
     
 )
}

export default InputMe;