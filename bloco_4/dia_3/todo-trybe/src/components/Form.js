import React from 'react'
import globalState from './store';

export default function Form() {
  console.log(globalState.getState().todoReducer.task);
  return (
    <form>
      <input
        type="text"

      />
      <button type="submit">
        Enviar
      </button>
    </form>
  )
}
