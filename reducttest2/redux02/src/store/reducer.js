import * as actionTypes from './actions';
const intialState={
        list:[]
}

const reducer=(state=intialState,action)=>{
   switch(action.type){
       case actionTypes.ADD_PERSON:

       return{...state,}

       case actionTypes.REMOVE_PERSON:

       return{...state,}
   }
   return state;

}

export default reducer