import React from 'react';

import HeroDiv from './HeroImage';
import Hero from './assets/images/gifts-parties-image.png'
const GiftPage =(props)=>{
    return(
        <div>
            <HeroDiv image={Hero}/>
        </div>
    )
}

export default GiftPage;