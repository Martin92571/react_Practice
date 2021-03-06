import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
class Counter extends Component {
  
    
    render () {
        const listItems=this.props.storedResults.map(str=>{
            return  <li key={str.id} onClick={()=>this.props.onDeleteResult(str.id)}>{str.value}</li>
          });
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubstractCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                  <ul>
                      {listItems}
                  </ul>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    console.log(state);
    return{
      ctr:state.ctr.counter,
      storedResults:state.res.result

    };
};

const mapDispatchToProps=dispatch=>{
    return {
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:()=>dispatch({type:actionTypes.ADD,val:10}),
        onSubstractCounter:()=>dispatch({type:actionTypes.SUBSTRACT,val:10}),
        onStoreResult:(result)=>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,resultDeleteId:id})
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);