import React from 'react'
import { connect } from 'react-redux';

function Title({ counter }) {
  return (
      <div className="header">
        <h1>TODO</h1>
        <h3>Possui { counter } Tarefas</h3>
      </div>
  );
}


const mapStateToProps = state => ({
  counter: state.todoReducer.counterTask
})

export default connect(mapStateToProps)(Title);
