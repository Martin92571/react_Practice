import React from 'react';

const ContactCard=(props)=>{
    return(
        <div>
          <div>{props.lastname}</div>
          <div>
              <h3>{props.firstname} {props.lastname}</h3>
              <h3>Phone:{props.phone}</h3>
              <h3>Email:{props.Email}</h3>
          </div>
        </div>
    )
}

export default ContactCard;