import React from 'react';

const HeroImage=(props)=>{
  return(
    <div className="heroImage">
    <img src={props.image}/>
    </div>
  )
}

export default HeroImage;