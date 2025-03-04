// write your createStore function here
function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state
  }

  return(
    {dispatch,
    getState}
  )
  
}

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  let store = createStore(candyReducer)
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
}