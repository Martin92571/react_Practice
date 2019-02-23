import React from 'react';
import HeroImage from './HeroImage';
import Hero from './assets/images/welcome-image.png';
import MainPgContentImage from './assets/images/macarons-image.png'
import MacaronsList from './MacaronsList'
const Mainpage=(props)=>{
    return(
        <div>
            <HeroImage image={Hero}/>
            <div className="MainPageContent">
            <div className="MainPgContentLeft">
            <img src={MainPgContentImage}/>
            </div>
            <div className="MainPgContentRight">
            <h5>Welcome To Mboutiq</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into 
                 electronic typesetting, remaining essentially unchanged. It was popularised in 
                 the 1960s with th</p> 
            <h5>We Love Macarons</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book. It has survived not only five centuries, but also the leap into 
                 electronic typesetting, remaining essentially unchanged. It was popularised in 
                 the 1960s with th</p> 
                 <h5>Find the flavor that you like.Try a sample Every Day!</h5>
            </div>
            </div>
            <MacaronsList/>
        </div>
    )
}

export default Mainpage;