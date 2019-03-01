import * as actionTypes from '../actions';
const intialState={
    
    result:[]
}
const reducer=(state=intialState,action)=>{
    switch(action.type){
      
        case actionTypes.STORE_RESULT:
        return {
            ...state,
             result:state.result.concat({id:Date.now(),value:action.result})
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