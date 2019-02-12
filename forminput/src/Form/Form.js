import React from 'react';

const Form=(props)=>{
    return(
    <div className="person"  >
        FirstName
        <input data-type="firstName" type="text" onChange={props.changed} value={props.first}/>
        LastName
        <input data-type="lastName" type="text" onChange={props.changed} value={props.last}/>
        Phone
        <input data-type="phoneNumber" type="text" onChange={props.changed} value={props.phone}/>
        Email:
        <input data-type="email" type="text" onChange={props.changed} value={props.email}/>
        <button onClick={props.submit} className="btn btn-success">Submit</button>
        <button onClick={props.clear} className="btn btn-success">Clear</button>
    </div>
    )
}

export default Form;