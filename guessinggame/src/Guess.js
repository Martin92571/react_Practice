import React from 'react';
import Div from './divMaker';
const Guess=(props)=>{
    console.log(props);
    const DivMaker=props.amount.reverse().map((p,index)=>{
        if(props.rNumber<p){
            return <Div classes={"ghigh"} range={"Too High"}guess={p} key={index}></Div>
        }else if(props.rNumber>p){
            return <Div classes={"glow"}range={"Too Low"}guess={p} key={index}></Div>
        }else{
            return <Div classes={"gcorrect"} range={"Correct"}guess={p} key={index}></Div>
        }
        
    })
    return(
        <div>
        {DivMaker}
        </div>
    )
}

export default Guess;