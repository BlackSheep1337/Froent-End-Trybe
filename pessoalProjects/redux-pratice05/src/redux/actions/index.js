import ActionTypes from '../contants';

export const stateForm = (form) => {
  return {
    type: ActionTypes.SUBMIT_FORM,
    payload: form,
  }
} 