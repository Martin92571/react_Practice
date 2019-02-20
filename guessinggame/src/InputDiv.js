import React from 'react';

const InputDiv=(props)=>{
    console.log(props)
   const style={
        width:'20%',
        margin:'20px auto'
    }
    return(
        <div>
        <input onChange={(e)=>props.change(e)}style={style} className="form-control" value={props.number} type="number"></input>
        <button onClick={(e)=>props.delete()}className="btn btn-danger">Reset Game</button>
        <button onClick={(e)=>props.check()}className="btn btn-success">Guess</button>
        </div>
    )
}
export default InputDiv;