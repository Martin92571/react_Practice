import React from 'react';
const Modal = (props) => {
   
    const {show,handleClose}=props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";
 
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <video className="videoModal"controls>
                <source src={`${props.href}`} type="video/mp4"/>
                 
                  Your browser does not support the video tag.
                </video>
          <button className="closeBtn" onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };
  export default Modal;