import React,{Component} from 'react';

class Stopwatch extends Component{
    constructor(props){
        super(props);
    }
    state={
        start:null,
        status:'stopped',
        elapsed:0
      }
 start=(event)=>{
    const { start, elapsed } = this.state;

    let newStart = new Date().getTime();

    if(start){
        newStart -= elapsed;
    }
      this.setState({
          status:'running',
          start:newStart
      })
      setTimeout(this.update, 10);
 }
 stop=(event)=>{
     this.setState({
         status:'stopped'

     })
     
 }
 update=(event)=>{
     const {status,start}=this.state;
     if(status==="running"){
        this.setState({
            elapsed:new Date().getTime()- start
        })
        setTimeout(this.update, 10);
     }
 }

 reset=(event)=>{
    this.setState({
        status: 'stopped',
        start: null,
        elapsed: 0
    })
}
 
render(){
    const {elapsed,status}=this.state;
    return(
        <div className={"text-center"}>
            <h1>{elapsed}</h1>
            <p>{status}</p>
            <div>
              <button onClick={this.start}className={'btn btn-success'}>Start</button>
              <button onClick={this.stop} className={'btn btn-danger'}>Stop</button>  
              <button onClick={this.reset} className={'btn btn-primary'}>Reset</button>   
            </div>
        </div>
    )
}

}

export default Stopwatch;