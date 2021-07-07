import { FETCH_DATA, HIDE_LOADER, SHOW_LOADER } from "../actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
}

export const dataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        data: payload
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}


