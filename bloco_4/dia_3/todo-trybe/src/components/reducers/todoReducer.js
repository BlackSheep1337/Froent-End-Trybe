const INITIAL_STATE = {
  task: [],
  counterTask: 0,
}

export default function todoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TASK' :
      return {
        task: [...state, action.task ],
        counterTask: state.counterTask + 1,
      
      }


    default:
      return state;
  }
}
