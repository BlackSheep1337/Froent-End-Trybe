import ActionTypes from "../contants"

const INITIAL_STATE = {
  count: 0,
}

export const accountReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type === ActionTypes.DEPOSIT) {
    return { count: state.count + payload}
  }
  if (type === ActionTypes.WITHDRAW) {
    return { count: state.count - payload }
  }
  return state;
}
