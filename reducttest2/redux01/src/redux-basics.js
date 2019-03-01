const redux = require('redux');
const reactdux=require('react-redux');

console.log("react-redux");
console.dir(reactdux);
const createStore=redux.createStore;
const initalState={
    counter:0
}
const rootReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'INC_COUNTER':

        return{
            ...state,
            counter:state.counter + 1
        }
        case 'ADD_COUNTER':
        return{
            ...state,
            counter:state.counter + action.value
        }
       default :
       return state;
    }
   
};
const store =createStore(rootReducer);
console.log("store");
console.dir(store);
console.log("Redux");
console.dir(redux);
console.log("createStore");
console.dir(createStore);
console.log("getState");
console.log(store.getState());
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
})

store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());
