import React from 'react';
import logo from './assets/images/logo.png';
import { Link } from "react-router-dom";
const Header=(props)=>{
    return(
        <div className="header">
          <div className="headerLogo">
           <img src={logo} alt="logo"/>
          </div>
          <div className="headerNav">
          <ul>
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/our-macaones">Our Macarons</Link></li>
              <li><Link to="gift-parties">Gift & Parties</Link></li>
              <li><Link to="contactUs">Contact</Link></li>
          </ul>
          </div>
        </div>
    )
}

export default Header;