import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav=(porps)=>{
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item"><NavLink exact to="/" className="nav-link">Welcome</NavLink></li>
            <li className="nav-item"><NavLink to="/our_macarons" className="nav-link">Macarones</NavLink></li>
            <li className="nav-item"><NavLink to="/gift_party" className="nav-link">Gift & Party</NavLink></li>
            <li className="nav-item"><NavLink to="/contact_us" className="nav-link">Contact US</NavLink></li>
        </ul>
    )
}

export default Nav;