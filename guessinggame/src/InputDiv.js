import React from 'react';

const InputDiv=(props)=>{
    console.log(props)
   const style={
        width:'20%',
        margin:'20px auto'
    }
    return(
        <div>
        <input onChange={()=>props.change()}style={style} className="form-control" type="number"></input>
        <button className="btn btn-danger">Reset Game</button>
        <button className="btn btn-success">Reset Game</button>
        </div>
    )
}
export default InputDiv;