
const redux = require('redux')
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
   return {
      type: BUY_CAKE,
      info: 'First Redux action'
   }
}

const initialState = {
   numOfCakes: 10
}

const reducer = (state = initialState , action) =>{
   switch(action.type){
    case BUY_CAKE : return{
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
   }
}


const store = createStore(reducer);
console.log('Initial state' , store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()




/*
  Step Of the Redux

  Hold the Application State
  Allows access to state via getState()
  Allows state to be updated via dispatch(action)
  Register Listerners via subscribe(listener)
  Handles unregistering of listerners via the function

*/