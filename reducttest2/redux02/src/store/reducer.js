import * as actionTypes from './actions';
const intialState={
        list:[]
}

const reducer=(state=intialState,action)=>{
   switch(action.type){
       case actionTypes.ADD_PERSON:
       
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        
       return{...state,
        list:state.list.concat(newPerson)
    }

       case actionTypes.REMOVE_PERSON:
       
         const deletePerson= state.list.filter(person => person.id !== action.id)
      
    
       return{...state,
              list:deletePerson
    }
   }
   return state;

}

export default reducer