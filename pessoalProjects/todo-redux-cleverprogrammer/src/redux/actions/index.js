import ActionTypes from "../contants";

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount
    })
  }
}
