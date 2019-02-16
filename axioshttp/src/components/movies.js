import React from 'react';

const OneMovie=(props)=>{
   
    const {info}=props;
    return(
        
        <div className="col">
            <h3>
            <a target="_blank" href={`${info.id.label}`}>
            {info["im:name"].label}</a>
            </h3>
            <div><img src={`${info['im:image']['0'].label}`}/></div>
            <p>{info.summary.label}</p>
            <button onClick={()=>{props.show(info.link["1"].attributes.href)}}className="btn btn-success">Preview</button>
            
        </div>
    )
}

export default OneMovie;