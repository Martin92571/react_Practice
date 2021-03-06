import React from 'react';
import Chocolate from './assets/images/chocolate.png';
import Coconut from './assets/images/coconut.png';
import Violet from './assets/images/violet-cassis.png';
import Green from './assets/images/green-tea.png';
import Passion from './assets/images/passion-fruit.png';
import Vanilla from './assets/images/vanilla.png';
import Coffee from './assets/images/coffee.png';
import Pistachio from './assets/images/pistachio.png';
import RaspBerry from './assets/images/raspbery.png';
import Lemon from './assets/images/lemon.png';
import Rose from './assets/images/rose.png';
import Tiffany from './assets/images/tiffany-blue.png';
import Caramel from './assets/images/caramel.png';
import Almond from './assets/images/almond.png';
const MacaronList=(props)=>{
    return(
        <div className="macaronListDivContainer">
          <div className="macaronListDiv">
            <div className="macaronListInnerDiv">
              Monday
              <p>15:00-16:00</p>
              <div className="macroneCookie1">
                <div>Choclate</div>
                <img className="macaroneCookieImage" src={Chocolate} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                <div>Coconut</div>
                <img className="macaroneCookieImage" src={Coconut} alt="macaroneImage"/> 
              </div>
            </div>
          </div>
          <div className="macaronListDiv">
            <div className="macaronListInnerDiv">
              Tuesday
              <p>14:00-15:00</p>
              <div className="macroneCookie1">
                <div>Violet Cassis</div>
                <img className="macaroneCookieImage" src={Violet} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                 <div>Green Tea</div>
                 <img className="macaroneCookieImage" src={Green} alt="macaroneImage"/>
              </div>
            </div>
          </div>
          <div className="macaronListDiv">
           <div className="macaronListInnerDiv">
              Wensday
              <p>09:00-10:00</p>
              <div className="macroneCookie1">
                <div>Passion Fruit</div>
                <img className="macaroneCookieImage" src={Passion} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
               <div>Vanilla</div>
               <img className="macaroneCookieImage" src={Vanilla} alt="macaroneImage"/>
              </div>
           </div>
          </div>
          <div className="macaronListDiv">
           <div className="macaronListInnerDiv">
              Thursday
              <p>18:00-19:00</p>
              <div className="macroneCookie1">
                <div>Coffee</div>
                <img className="macaroneCookieImage" src={Coffee} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                <div>Pistachio</div>
                <img className="macaroneCookieImage" src={Pistachio} alt="macaroneImage"/>
              </div>
           </div>
          </div>
          <div className="macaronListDiv">
            <div className="macaronListInnerDiv">
              Friday
              <p>11:00-12:00</p>
              <div className="macroneCookie1">
                 <div>RaspBerry</div>
                 <img className="macaroneCookieImage" src={RaspBerry} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                 <div>Lemon</div>
                 <img className="macaroneCookieImage" src={Lemon} alt="macaroneImage"/>
              </div>
            </div>
          </div>
          <div className="macaronListDiv">
            <div className="macaronListInnerDiv">
              Saturday
              <p>13:00-14:00</p>
              <div className="macroneCookie1">
                <div>Rose</div>
                <img className="macaroneCookieImage" src={Rose} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                <div>Tiffany Blue</div>
                <img className="macaroneCookieImage" src={Tiffany} alt="macaroneImage"/>
              </div>
            </div>
          </div>
          <div className="macaronListDiv">
            <div className="macaronListInnerDiv">
              Sunday
              <p>10:00-11:00</p>
              <div className="macroneCookie1">
                 <div>Carramel</div>
                <img className="macaroneCookieImage" src={Caramel} alt="macaroneImage"/>
              </div>
              <div className="macroneCookie2">
                <div>Almond</div>
                <img className="macaroneCookieImage" src={Almond} alt="macaroneImage"/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MacaronList;