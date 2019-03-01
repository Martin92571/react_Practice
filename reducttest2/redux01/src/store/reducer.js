import * as actionTypes from './actions';
const intialState={
    counter:0,
    result:[]
}
const reducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
        return {
            ...state,
            counter:state.counter +1
        }
        case actionTypes.DECREMENT:
        return {
            ...state,
            counter:state.counter - 1
        }
        case actionTypes.ADD:
        return {
            ...state,
            counter:state.counter + action.val
        }
        case actionTypes.SUBSTRACT:
        return {
            ...state,
            counter:state.counter - action.val
        }
        case actionTypes.STORE_RESULT:
        return {
            ...state,
             result:state.result.concat({id:Date.now(),value:state.counter})
        }
        case actionTypes.DELETE_RESULT:
        const id=2;
        // const newArray=[...state.result];
        // newArray.splice(id,1);
        const updatedArray = state.result.filter((result)=>{
                return result.id!=action.resultDeleteId;
        })
        return {
           
            ...state,
             result:updatedArray
        }
        default :
        return state;
    }
    
}

export default reducer;