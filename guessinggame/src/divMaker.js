import React from 'react'

export default (props)=>{
    console.log(props);
       
    return(
        <div className={props.classes} >{props.guess+"| "+props.range}</div>
    )
}