import ActionTypes from '../contants';
 
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

export const formReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ActionTypes.SUBMIT_FORM) {
    return {
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    }
  }
  return state;
}
