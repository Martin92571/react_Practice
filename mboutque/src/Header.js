import React from 'react';
import logo from './assets/images/logo.png';

const Header=(props)=>{
    return(
        <div className="header">
          <div className="headerLogo">
           <img src={logo}/>
          </div>
          <div className="headerNav">
          <ul>
              <li>Welcome</li>
              <li>Our Macarons</li>
              <li>Gift & Parties</li>
              <li>Contact</li>
          </ul>
          </div>
        </div>
    )
}

export default Header;