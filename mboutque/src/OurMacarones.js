import React from 'react';

import HeroDiv from './HeroImage';
import Hero from './assets/images/our-macarons-image.png'
const OurMacarones =(props)=>{
    return(
        <div>
            <HeroDiv image={Hero}/>
        </div>
    )
}

export default OurMacarones;