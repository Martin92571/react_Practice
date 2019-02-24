import React from 'react';
import Email from './assets/images/mail.png';
import Phone from './assets/images/phone.png';
import FaceBook from './assets/images/facebook.png';
import Twitter from './assets/images/twitter.png';
const Footer =(props)=>{
return (
    <div className="footer">
     <div className="footerCol">
         <img src={Email}/>
         order@mbotique.com
     </div>
     <div  className="footerCol">
         <img src={Phone}/>
         949-380-3111
         <p className="footerPTag">CopyRight Mbotique All Rights Reserved.</p>
     </div>
     <div  className="footerCol">
       Follow Us
         <img src={FaceBook}/>
         <img src={Twitter}/>
         
     </div>
    </div>
)
}

export default Footer;