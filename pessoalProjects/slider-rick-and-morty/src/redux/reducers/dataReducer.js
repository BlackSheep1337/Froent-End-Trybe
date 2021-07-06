import { FETCH_DATA } from "../actions";

const INITIAL_STATE = {
  data: [],
}

const dataReducer = (state = INITIAL_STATE, { type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return {
        data: [...state, payload]
      }
    default:
      return state;
  }
}

export default dataReducer;
