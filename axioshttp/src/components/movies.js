import React from 'react';

const OneMovie=(props)=>{
    console.log(props.info);
    const {info}=props;
    return(
        
        <div class="col">
            <h3>
            <a target="_blank" href={`${info.id.label}`}>
            {info["im:name"].label}</a>
            </h3>
            <div><img src={`${info['im:image']['0'].label}`}/></div>
            <p>{info.summary.label}</p>
            <video width="640" controls>
                <source src={`${info.link["1"].attributes.href}`} type="video/mp4"/>
                 
                  Your browser does not support the video tag.
                </video>
        </div>
    )
}

export default OneMovie;